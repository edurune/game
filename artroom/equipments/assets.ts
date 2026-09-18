import { join } from "node:path";
import type { EquipmentMetadata } from "@edurune/art/catalog";
import { artRig, inspectIcon, loadFrame, parseAsset } from "../assets.ts";
import { equipmentFrame as frame } from "@edurune/art/rendering";
import { catalogRoot, directories, readMetadata } from "../catalog.ts";

export async function loadEquipments() {
  const { rig: style } = await loadFrame();
  const rig = artRig(frame, style, ["weapon", "armor", "charm"]);
  const items = [];
  for (const slot of await directories(join(catalogRoot, "equipments"))) {
    for (const entry of await directories(join(catalogRoot, "equipments", slot.name))) {
      const path = join(catalogRoot, "equipments", slot.name, entry.name);
      const metadata = await readMetadata<EquipmentMetadata>(path);
      if (metadata.id !== entry.name || metadata.slot !== slot.name)
        throw new Error(`${entry.name}: ID or slot mismatch`);
      const item = parseAsset(
        await Bun.file(join(path, "art.svg")).text(),
        { ...metadata, label: metadata.id },
        rig,
      );
      items.push({ ...item, bounds: inspectIcon(item, rig) });
    }
  }
  return { rig, items };
}
