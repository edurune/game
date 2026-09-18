import { join } from "node:path";
import type { ArtRig, MotionDefinition } from "@edurune/art";
import type { EnemyMetadata } from "@edurune/art/catalog";
import { compose } from "@edurune/art/rendering";
import { inspectItem, paintedBounds, parseAsset } from "../assets.ts";
import { validateMotion } from "@edurune/art/rendering";
import { inspectEnemyOutlines } from "./outlines.ts";
import { directories, readMetadata, sourceModule } from "../catalog.ts";

export async function loadEnemies(root: string, rig: ArtRig & { hoverClearance: number }) {
  const items = [];
  for (const entry of await directories(join(root, "enemies"))) {
    const path = join(root, "enemies", entry.name);
    const metadata = await readMetadata<EnemyMetadata>(path);
    if (metadata.id !== entry.name) throw new Error(`${entry.name}: ID mismatch`);
    const item = parseAsset(
      await Bun.file(join(path, "art.svg")).text(),
      { ...metadata, label: metadata.id, slot: "enemy" },
      rig,
    );
    inspectEnemyOutlines(item, rig);
    const motion = validateMotion(
      await sourceModule<MotionDefinition>(join(path, "motion.ts")),
      item,
      rig,
    );
    const bounds = paintedBounds(compose(rig, [item], [item.id]), rig);
    if (JSON.stringify(metadata.bounds) !== JSON.stringify(bounds))
      throw new Error(`${item.id}: update painted bounds to [${bounds.join(", ")}]`);
    if (bounds[3] > rig.baseline + rig.strokeWidth || bounds[3] < rig.baseline - rig.hoverClearance)
      throw new Error(`${item.id}: incorrect ground clearance`);
    items.push({ ...item, motion, bounds, partBounds: inspectItem(item, rig) });
  }
  return { items };
}
