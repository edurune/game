import type { ArtItem, ArtRig } from "@edurune/art";
import { DOMParser, XMLSerializer } from "@xmldom/xmldom";
import { Resvg } from "@resvg/resvg-js";
import { compose } from "@edurune/art/rendering";

// Render authored geometry twice with different body-mask colors. A pixel that
// changes exposes the body beneath the garment. Ignore the body's own outline:
// this checks fill coverage, not tiny differences between antialiased ink edges.
const bodyMask = (part: ArtItem["parts"][number], color: string) => {
  const doc = new DOMParser().parseFromString(part.markup, "image/svg+xml");
  for (const node of Array.from(doc.getElementsByTagName("*"))) {
    if (
      node.getAttribute("fill") !== "none" &&
      (node.hasAttribute("fill") || node === doc.documentElement)
    )
      node.setAttribute("fill", color);
    node.setAttribute("stroke", "none");
  }
  return { ...part, markup: new XMLSerializer().serializeToString(doc.documentElement!) };
};

export function inspectCoverage(item: ArtItem, base: ArtItem, rig: ArtRig) {
  return rig.coverageChecks
    .filter((rule) => rule.slots.includes(item.slot))
    .map((rule) => {
      const part = base.parts.find((part) => part.plane === rule.basePlane);
      if (!part) throw new Error(`Coverage check ${rule.id}: missing base plane ${rule.basePlane}`);
      const render = (color: string) => {
        const mask = { ...base, parts: [bodyMask(part, color)] };
        return new Resvg(compose(rig, [mask, item], [mask.id, item.id]), {
          font: { loadSystemFonts: false },
        }).render().pixels;
      };
      const red = render("#ff0000"),
        blue = render("#0000ff");
      const [left, top, right, bottom] = rule.region;
      let pixels = 0,
        x1 = Infinity,
        y1 = Infinity,
        x2 = -Infinity,
        y2 = -Infinity;
      for (let y = top; y < bottom; y++)
        for (let x = left; x < right; x++) {
          const offset = (y * 320 + x) * 4;
          // Exclude subpixel fringes with less than about 20% exposed body coverage.
          if (
            Math.max(
              Math.abs(red[offset] - blue[offset]),
              Math.abs(red[offset + 2] - blue[offset + 2]),
            ) > 48
          ) {
            pixels++;
            x1 = Math.min(x1, x);
            y1 = Math.min(y1, y);
            x2 = Math.max(x2, x + 1);
            y2 = Math.max(y2, y + 1);
          }
        }
      return { id: rule.id, region: rule.region, pixels, bounds: pixels ? [x1, y1, x2, y2] : null };
    });
}
