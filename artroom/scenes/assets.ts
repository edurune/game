import { join } from "node:path";
import { cosmetics, regions, scenes } from "@edurune/art/catalog";
import { battleFrame, compose } from "@edurune/art/rendering";
import { artRig, inspectItem, loadFrame, paintedBounds, parseAsset } from "../assets.ts";
import { catalogRoot } from "../catalog.ts";

export async function loadScenes() {
  const { rig: style } = await loadFrame();
  const rig = artRig(battleFrame.scene, style, "scene");
  const records = [
    ...scenes.map(({ id }) => ({ id, source: "interface" as const, directory: "scenes" })),
    ...regions.map(({ id }) => ({ id, source: "region" as const, directory: "regions" })),
  ];
  const items = await Promise.all(
    records.map(async ({ id, source, directory }) => {
      const item = parseAsset(
        await Bun.file(join(catalogRoot, directory, id, "art.svg")).text(),
        { id, label: id, slot: "scene" },
        rig,
      );
      const bounds = paintedBounds(compose(rig, [item], [id]), rig);
      if (bounds.join() !== rig.safeBounds.join())
        throw new Error(`${id}: scene must fill the canvas without a border`);
      return { ...item, source, bounds, partBounds: inspectItem(item, rig) };
    }),
  );
  const backgrounds = await Promise.all(
    cosmetics
      .filter((item) => item.slot === "background")
      .map(async ({ id, slot }) =>
        parseAsset(
          await Bun.file(join(catalogRoot, "cosmetics", slot, id, "art.svg")).text(),
          { id, slot },
          style,
        ),
      ),
  );
  return { rig, items, backgrounds };
}
