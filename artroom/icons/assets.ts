import { join } from "node:path";
import type { CombatIconMetadata } from "@edurune/art/catalog";
import { artRig, inspectIcon, loadFrame, parseAsset } from "../assets.ts";
import { iconFrame as frame } from "@edurune/art/rendering";
import { catalogRoot, directories, readMetadata } from "../catalog.ts";

export async function loadCombatIcons() {
  const { rig: style } = await loadFrame();
  const rig = artRig(frame, { ...style, strokeWidth: frame.strokeWidth }, "combat-icon");
  const items = [];
  const meanings = new Set<string>();
  for (const category of await directories(join(catalogRoot, "icons/combat"))) {
    for (const entry of await directories(join(catalogRoot, "icons/combat", category.name))) {
      const path = join(catalogRoot, "icons/combat", category.name, entry.name);
      const metadata = (await readMetadata<CombatIconMetadata>(path)) as CombatIconMetadata;
      if (metadata.id !== entry.name || metadata.category !== category.name)
        throw new Error(`${entry.name}: ID or category mismatch`);
      const reference =
        metadata.category === "status" ? `${metadata.stat}.${metadata.direction}` : metadata.value;
      const meaning = `${metadata.category}:${reference}`;
      if (meanings.has(meaning)) throw new Error(`${entry.name}: duplicate meaning ${meaning}`);
      meanings.add(meaning);
      const item = parseAsset(
        await Bun.file(join(path, "art.svg")).text(),
        { ...metadata, label: metadata.id, slot: "combat-icon", reference },
        rig,
      );
      const bounds = inspectIcon(item, rig);
      if (
        item.defs ||
        /\b(?:transform|opacity|fill-opacity|stroke-opacity|data-color)=/.test(item.parts[0].markup)
      )
        throw new Error(`${item.id}: expected one flat icon plane`);
      items.push({ ...item, bounds });
    }
  }
  return { rig, items };
}
