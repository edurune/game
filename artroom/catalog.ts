import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { ItemMetadata, CosmeticMetadata } from "@edurune/art/catalog";
import type { ArtItem } from "@edurune/art";
import { defaultOutfit } from "@edurune/art/catalog";
import { loadFrame, parseAsset } from "./assets.ts";

export const catalogRoot = fileURLToPath(new URL(".", import.meta.resolve("@edurune/art/catalog")));
export async function sourceModule<T>(path: string): Promise<T> {
  const { mtimeMs } = await stat(path);
  return (await import(`${pathToFileURL(path).href}?v=${mtimeMs}`)).default as T;
}
export async function readMetadata<T extends ItemMetadata = ItemMetadata>(
  directory: string,
): Promise<Omit<T, "name" | "title" | "description">> {
  const { name, title, description, ...record } = await sourceModule<T>(
    join(directory, "metadata.ts"),
  );
  for (const descriptor of [name, title, description])
    if (descriptor !== undefined && typeof descriptor.id !== "string")
      throw new Error(`${directory}: invalid display message`);
  return record;
}
export async function directoryEntries(path: string) {
  return (await readdir(path, { withFileTypes: true }))
    .filter((entry) => entry.name !== ".DS_Store")
    .sort((a, b) => a.name.localeCompare(b.name));
}
export async function directories(path: string) {
  return (await directoryEntries(path)).filter((entry) => entry.isDirectory());
}
export interface WardrobeItem extends ArtItem {
  label: string;
  rarity?: CosmeticMetadata["rarity"];
}
export async function loadWardrobe() {
  const { rig, body } = await loadFrame();
  const items: WardrobeItem[] = [body];
  const slots = await directories(join(catalogRoot, "cosmetics"));
  const collections = [
    ...slots.map((slot) => ({ slot: slot.name, path: join(catalogRoot, "cosmetics", slot.name) })),
    { slot: "hair", path: join(catalogRoot, "characters/hair") },
  ];
  for (const collection of collections) {
    for (const entry of await directories(collection.path)) {
      const path = join(collection.path, entry.name);
      const metadata = await readMetadata<CosmeticMetadata>(path);
      if (
        metadata.id !== entry.name ||
        (collection.slot !== "hair" && metadata.slot !== collection.slot)
      )
        throw new Error(`${path}: ID or slot mismatch`);
      items.push(
        parseAsset(
          await Bun.file(join(path, "art.svg")).text(),
          { ...metadata, slot: collection.slot, label: metadata.id },
          rig,
        ),
      );
    }
  }
  if (new Set(items.map((item) => item.id)).size !== items.length)
    throw new Error("Duplicate character ID");
  return { rig, items, defaultOutfit };
}
export async function loadSkills() {
  return Promise.all(
    (await directories(join(catalogRoot, "skills"))).map((entry) =>
      sourceModule<ItemMetadata>(join(catalogRoot, "skills", entry.name, "metadata.ts")),
    ),
  );
}
