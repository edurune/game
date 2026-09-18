import type { Element as XmlElement, Node as XmlNode } from "@xmldom/xmldom";
import type { ArtItem, ArtRig } from "@edurune/art";
import { DOMParser, XMLSerializer } from "@xmldom/xmldom";
import { Resvg } from "@resvg/resvg-js";
import { assert, compose } from "@edurune/art/rendering";

const serializer = new XMLSerializer();
const children = (node: XmlElement) =>
  Array.from(node.childNodes).filter((n): n is XmlElement => n.nodeType === 1);
const shapes = new Set(["path", "rect", "circle", "ellipse", "polygon", "polyline"]);
const ancestor = (node: XmlNode, matches: (node: XmlElement) => boolean) => {
  for (let current: XmlNode | null = node; current?.nodeType === 1; current = current.parentNode)
    if (matches(current as XmlElement)) return current as XmlElement;
};
const inherited = (node: XmlElement, attribute: string, fallback = "") =>
  ancestor(node, (n) => n.hasAttribute(attribute))?.getAttribute(attribute) ?? fallback;
const isSurface = (node: XmlElement) =>
  node.tagName === "g" && !!node.getAttribute("id")?.endsWith("-surface");

export function inspectEnemyOutlines(item: ArtItem, rig: ArtRig) {
  const doc = new DOMParser().parseFromString(compose(rig, [item], [item.id]), "image/svg+xml");
  const nodes = Array.from(doc.getElementsByTagName("*"));
  for (const node of nodes) {
    if (!shapes.has(node.tagName) || ancestor(node, (n) => n.tagName === "defs")) continue;
    const fill = inherited(node, "fill", "#000000");
    if (
      inherited(node, "stroke", "none") === "none" &&
      !["none", rig.outline].includes(fill) &&
      !ancestor(node, (n) => !!n.getAttribute("id")?.endsWith("--eyes"))
    )
      assert(
        ancestor(node, isSurface),
        `${item.id}: put unoutlined material fills in a named *-surface group`,
      );
  }

  const surfaces = nodes.filter(isSurface);
  for (const surface of surfaces) {
    const [fills, outline, extra] = children(surface);
    const label = `${item.id}/${surface.getAttribute("id")!.split("--").at(-1)}`;
    assert(
      fills?.tagName === "g" &&
        fills.getAttribute("stroke") === "none" &&
        outline?.tagName === "path" &&
        outline.getAttribute("fill") === "none" &&
        inherited(outline, "stroke") === rig.outline &&
        !extra,
      `${label}: draw clipped fills first and one unfilled contour last`,
    );
    const clipId = fills.getAttribute("clip-path")?.match(/^url\(#(.+)\)$/)?.[1];
    const clip = nodes.find((n) => n.tagName === "clipPath" && n.getAttribute("id") === clipId);
    const clipShapes = clip && children(clip);
    assert(
      clipShapes?.length === 1 &&
        clipShapes[0].tagName === "path" &&
        clipShapes[0].getAttribute("d") === outline.getAttribute("d"),
      `${label}: shading clip and contour must share the exact silhouette`,
    );
    const wrap = (markup: string) =>
      `<svg xmlns="http://www.w3.org/2000/svg" width="${rig.viewBox[2]}" height="${rig.viewBox[3]}" viewBox="${rig.viewBox.join(" ")}">${serializer.serializeToString(doc.getElementsByTagName("defs")[0])}<g fill="${inherited(surface, "fill", "none")}" stroke="${rig.outline}" stroke-width="${rig.strokeWidth}" stroke-linecap="${rig.strokeLinecap}" stroke-linejoin="${rig.strokeLinejoin}">${markup}</g></svg>`;
    const render = (markup: string) =>
      new Resvg(wrap(markup), { font: { loadSystemFonts: false } }).render().pixels;
    const reference = doc.createElementNS("http://www.w3.org/2000/svg", "path");
    reference.setAttribute("d", clipShapes[0].getAttribute("d")!);
    reference.setAttribute("fill", "none");
    const expected = render(serializer.serializeToString(reference));
    const actual = render(serializer.serializeToString(surface));
    const ink = rig.outline.match(/[0-9a-f]{2}/gi)!.map((v) => Number.parseInt(v, 16));
    let checked = 0;
    let missing = 0;
    for (let i = 0; i < expected.length; i += 4) {
      // Ignore antialiased fringe; every opaque contour pixel must retain its ink.
      if (expected[i + 3] < 250) continue;
      checked++;
      if (
        actual[i + 3] < 250 ||
        ink.some((value, channel) => Math.abs(actual[i + channel] - value) > 4)
      )
        missing++;
    }
    assert(checked > 0, `${label}: contour has no opaque ink to inspect`);
    assert(missing === 0, `${label}: ${missing} contour pixels are covered or faded`);
  }
  return surfaces.length;
}
