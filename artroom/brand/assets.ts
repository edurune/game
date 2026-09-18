import { join } from "node:path";
import { brands } from "@edurune/art/catalog";
import { brandFrames, characterFrame, compose } from "@edurune/art/rendering";
import { artRig, paintedBounds, parseAsset } from "../assets.ts";
import { catalogRoot } from "../catalog.ts";

export async function loadBrand() {
  return Promise.all(
    brands.map(async (metadata) => {
      const frame = brandFrames[metadata.kind];
      const rig = artRig(frame, { ...characterFrame, strokeWidth: frame.strokeWidth }, "brand");
      const source = await Bun.file(join(catalogRoot, "brand", metadata.id, "art.svg")).text();
      const item = parseAsset(source, { ...metadata, slot: "brand" }, rig);
      const bounds = paintedBounds(compose(rig, [item], [item.id]), rig);
      return { ...metadata, source, bounds, frame };
    }),
  );
}
