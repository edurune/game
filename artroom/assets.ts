import type { ArtItem, ArtRig, Rect } from "@edurune/art";
import { DOMParser, XMLSerializer, onErrorStopParsing } from "@xmldom/xmldom";
import { Resvg } from "@resvg/resvg-js";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { compose } from "@edurune/art/rendering";
import { parseAsset, validateRig } from "@edurune/art/rendering";
import { characterFrame as rig } from "@edurune/art/rendering";
import { assert } from "@edurune/art/rendering";

export const frameRoot = fileURLToPath(
  new URL("frame/", import.meta.resolve("@edurune/art/catalog")),
);
export { parseAsset, validateRig } from "@edurune/art/rendering";

const parser = () => new DOMParser({ onError: onErrorStopParsing });
const serializer = new XMLSerializer();

// Inspect each part independently so another piece cannot conceal overflow.
export function paintedBounds(svg: string, rig: ArtRig): Rect {
  const doc = parser().parseFromString(svg, "image/svg+xml");
  const root = doc.documentElement!;
  const renderer = new Resvg(svg, { font: { loadSystemFonts: false } });
  const geometric = renderer.getBBox();
  const [, , width, height] = rig.viewBox;
  const margin = 320;
  const inspectionWidth = width + margin * 2;
  const inspectionHeight = height + margin * 2;
  if (
    geometric &&
    (geometric.x < -320 ||
      geometric.y < -320 ||
      geometric.x + geometric.width > width + margin ||
      geometric.y + geometric.height > height + margin)
  ) {
    throw new Error("Geometry extends beyond the inspection area");
  }
  // Expand the viewport before rendering: ordinary canvas bounds would hide clipping.
  root.setAttribute("viewBox", `-${margin} -${margin} ${inspectionWidth} ${inspectionHeight}`);
  root.setAttribute("width", String(inspectionWidth));
  root.setAttribute("height", String(inspectionHeight));
  const rendered = new Resvg(serializer.serializeToString(root), {
    font: { loadSystemFonts: false },
  }).render();
  const pixels = rendered.pixels;
  let left = Infinity,
    top = Infinity,
    right = -Infinity,
    bottom = -Infinity;
  for (let y = 0; y < inspectionHeight; y++) {
    for (let x = 0; x < inspectionWidth; x++) {
      if (pixels[(y * inspectionWidth + x) * 4 + 3] > 0) {
        left = Math.min(left, x - margin);
        top = Math.min(top, y - margin);
        right = Math.max(right, x - margin + 1);
        bottom = Math.max(bottom, y - margin + 1);
      }
    }
  }
  assert(Number.isFinite(left), "Drawing is empty or fully clipped");
  const bounds: Rect = [left, top, right, bottom];
  const safe = rig.safeBounds;
  assert(
    left >= safe[0] && top >= safe[1] && right <= safe[2] && bottom <= safe[3],
    `Painted bounds [${bounds.join(", ")}] exceed safe bounds [${safe.join(", ")}]`,
  );
  return bounds;
}

export function inspectItem(item: ArtItem, rig: ArtRig) {
  const bounds: Record<string, Rect> = {};
  for (const part of item.parts) {
    const isolated = { ...item, parts: [part] };
    for (const pose of Object.keys(rig.poses)) {
      try {
        bounds[`${part.plane}/${pose}`] = paintedBounds(
          compose(rig, [isolated], [item.id], { pose }),
          rig,
        );
        if (part.fit && pose === "rest") {
          const painted = bounds[`${part.plane}/${pose}`];
          const region = rig.fitRegions[part.fit];
          assert(
            painted[0] >= region[0] &&
              painted[1] >= region[1] &&
              painted[2] <= region[2] &&
              painted[3] <= region[3],
            `Painted bounds [${painted}] exceed ${part.fit} fitting region [${region}]`,
          );
        }
      } catch (error) {
        throw new Error(
          `${item.id} / ${part.plane} / ${pose}: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }
  }
  return bounds;
}

export function inspectIcon(item: ArtItem, rig: ArtRig) {
  assert(
    item.parts.length === 1 && item.parts[0]?.plane === "icon",
    `${item.id}: expected one icon plane`,
  );
  return inspectItem(item, rig)["icon/rest"];
}

export { artRig } from "@edurune/art/rendering";

export async function loadFrame(root = frameRoot) {
  validateRig(rig);
  const body = parseAsset(
    await Bun.file(join(root, "body.svg")).text(),
    {
      id: "round-traveler-body",
      slot: "base",
      label: "round-traveler-body",
    },
    rig,
  );
  return { rig, body };
}
