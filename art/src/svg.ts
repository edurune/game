import type { Element as XmlElement } from "@xmldom/xmldom";
import type { ArtItem, ArtRig } from "./types.ts";
import { DOMParser, XMLSerializer, onErrorStopParsing } from "@xmldom/xmldom";
import { assert, isIdentifier } from "./validation.ts";

const namespace = "http://www.w3.org/2000/svg";
const tags = new Set([
  "svg",
  "g",
  "defs",
  "path",
  "rect",
  "circle",
  "ellipse",
  "line",
  "polyline",
  "polygon",
  "clipPath",
  "linearGradient",
  "radialGradient",
  "stop",
  "title",
  "desc",
]);
const attributes = new Set(
  "xmlns width height viewBox data-rig data-plane data-anchor data-fit data-color id d x y x1 x2 y1 y2 cx cy r rx ry points fill stroke stroke-width stroke-linecap stroke-linejoin stroke-miterlimit stroke-dasharray stroke-dashoffset fill-rule clip-rule opacity fill-opacity stroke-opacity transform clip-path gradientUnits gradientTransform offset stop-color stop-opacity fx fy fr spreadMethod clipPathUnits".split(
    " ",
  ),
);
const parser = () => new DOMParser({ onError: onErrorStopParsing });
const serializer = new XMLSerializer();
const children = (node: XmlElement) =>
  Array.from(node.childNodes).filter((child): child is XmlElement => child.nodeType === 1);
const elements = (node: XmlElement) => [node, ...Array.from(node.getElementsByTagName("*"))];

export function validateRig(rig: ArtRig) {
  assert(isIdentifier(rig.id), "Invalid rig ID");
  assert(
    JSON.stringify(rig.viewBox) === "[0,0,320,320]",
    "This workbench supports a 320 × 320 frame",
  );
  assert(
    rig.safeBounds?.length === 4 && rig.safeBounds.every(Number.isFinite),
    "Invalid safe bounds",
  );
  const [left, top, right, bottom] = rig.safeBounds;
  assert(Array.isArray(rig.coverageChecks), "Define garment coverage checks");
  for (const rule of rig.coverageChecks) {
    assert(
      isIdentifier(rule.id) &&
        rule.slots?.length &&
        rig.planes.some((plane) => plane.id === rule.basePlane && plane.slots.includes("base")) &&
        rule.region?.length === 4 &&
        rule.region.every(Number.isInteger),
      "Invalid coverage check",
    );
    const [x1, y1, x2, y2] = rule.region;
    assert(
      x1 >= left && y1 >= top && x2 <= right && y2 <= bottom && x1 < x2 && y1 < y2,
      "Coverage region must fit the safe frame",
    );
  }
  assert(
    left >= 0 && top >= 0 && left < right && top < bottom && right <= 320 && bottom <= 320,
    "Safe bounds must fit the frame",
  );
  assert(
    Number.isFinite(rig.baseline) && rig.baseline >= top && rig.baseline <= bottom,
    "Invalid baseline",
  );
  assert(
    rig.planes?.length > 0 && new Set(rig.planes.map((p) => p.id)).size === rig.planes.length,
    "Duplicate or missing planes",
  );
  for (const [name, point] of Object.entries(rig.anchors)) {
    assert(
      isIdentifier(name) &&
        point.length === 2 &&
        point.every((n) => Number.isFinite(n) && n >= 0 && n <= 320),
      `Invalid anchor ${name}`,
    );
  }
  for (const plane of rig.planes) {
    assert(
      isIdentifier(plane.id) &&
        rig.anchors[plane.anchor] &&
        Array.isArray(plane.slots) &&
        plane.slots.length,
      `Invalid plane ${plane.id}`,
    );
  }
  assert(
    rig.poses.rest && Object.keys(rig.poses.rest).length === 0,
    "A neutral rest pose is required",
  );
  for (const pose of Object.values(rig.poses)) {
    for (const [anchor, angle] of Object.entries(pose)) {
      assert(
        rig.anchors[anchor] && Number.isFinite(angle) && Math.abs(angle) <= 90,
        `Invalid pose anchor ${anchor}`,
      );
    }
  }
  assert(
    [rig.outline, ...Object.values(rig.palette), ...Object.values(rig.materialPalette)].every((c) =>
      /^#[0-9a-f]{6}$/i.test(c),
    ),
    "Use explicit hex palette colors",
  );
  assert(
    Number.isFinite(rig.strokeWidth) &&
      rig.strokeWidth > 0 &&
      rig.strokeLinecap === "round" &&
      rig.strokeLinejoin === "round",
    "Define an explicit stroke width and round caps/joins",
  );
  for (const [name, region] of Object.entries(rig.fitRegions)) {
    assert(
      isIdentifier(name) &&
        region.length === 4 &&
        region.every(Number.isFinite) &&
        region[0] >= left &&
        region[1] >= top &&
        region[2] <= right &&
        region[3] <= bottom &&
        region[0] < region[2] &&
        region[1] < region[3],
      `Invalid fitting region: ${name}`,
    );
  }
}

export function parseAsset<T extends { id: string; slot: string }>(
  source: string,
  item: T,
  rig: ArtRig,
): T & ArtItem {
  assert(isIdentifier(item.id), "Invalid item ID");
  assert(source.length < 500_000, "SVG exceeds 500 KB");
  assert(
    !/<!DOCTYPE|<!ENTITY|<\?/i.test(source),
    "Remove XML declarations, entities, and processing instructions",
  );
  const doc = parser().parseFromString(source, "image/svg+xml");
  const root = doc.documentElement;
  assert(root?.tagName === "svg" && root.namespaceURI === namespace, "Expected an SVG root");
  assert(root.getAttribute("data-rig") === rig.id, `Expected data-rig="${rig.id}"`);
  assert(
    root
      .getAttribute("viewBox")
      ?.trim()
      .split(/[\s,]+/)
      .map(Number)
      .join(" ") === rig.viewBox.join(" "),
    "Incorrect viewBox; preserve the entire shared frame",
  );
  assert(
    root.getAttribute("width") === String(rig.viewBox[2]) &&
      root.getAttribute("height") === String(rig.viewBox[3]),
    `Expected explicit width and height of ${rig.viewBox[2]} × ${rig.viewBox[3]}`,
  );
  for (const attr of Array.from(root.attributes)) {
    assert(
      ["xmlns", "width", "height", "viewBox", "data-rig"].includes(attr.name),
      `Move root ${attr.name} onto drawing groups`,
    );
  }
  const ids = new Map<string, XmlElement>();
  const refs: { node: XmlElement; attr: string; id: string }[] = [];
  for (const node of elements(root)) {
    assert(
      node.namespaceURI === namespace && tags.has(node.tagName),
      `Unsupported SVG element: ${node.tagName}`,
    );
    assert(
      node === root || node.tagName !== "svg",
      "Nested SVG viewports can crop art; use groups",
    );
    for (const child of Array.from(node.childNodes)) {
      if ([3, 4].includes(child.nodeType))
        assert(
          !child.textContent?.trim() || ["title", "desc"].includes(node.tagName),
          "Drawing groups may not contain text",
        );
    }
    for (const attr of Array.from(node.attributes)) {
      assert(attributes.has(attr.name), `Unsupported attribute: ${attr.name}`);
      if (attr.name === "stroke")
        assert(["none", rig.outline].includes(attr.value), `Use the shared outline ${rig.outline}`);
      if (attr.name === "stroke-width")
        assert(
          Number(attr.value) === rig.strokeWidth,
          `Use the shared ${rig.strokeWidth}px stroke width`,
        );
      if (attr.name === "stroke-linecap")
        assert(attr.value === rig.strokeLinecap, "Use round stroke caps");
      if (attr.name === "stroke-linejoin")
        assert(attr.value === rig.strokeLinejoin, "Use round stroke joins");
      if (["transform", "gradientTransform"].includes(attr.name))
        assert(
          /^(\s*(translate|rotate)\([\d\s.,eE+-]+\)\s*)+$/.test(attr.value),
          "Flatten scale, skew, and matrix transforms into geometry before fitting",
        );
      if (attr.name === "d")
        assert(/^[MmZzLlHhVvCcSsQqTtAaEe0-9.,+\s-]+$/.test(attr.value), "Invalid path characters");
      assert(
        // eslint-disable-next-line no-control-regex -- SVG attributes reject control characters.
        !/\\|[\u0000-\u001f]/.test(attr.value) || ["d", "points"].includes(attr.name),
        `Unsupported escape in ${attr.name}`,
      );
      if (["fill", "stroke", "stop-color"].includes(attr.name)) {
        assert(
          /^(none|#[0-9a-f]{3}|#[0-9a-f]{6}|url\(#[a-z][a-z0-9-]*\))$/i.test(attr.value),
          `Use a hex color, none, or local paint reference: ${attr.name}`,
        );
      }
      if (attr.name === "clip-path")
        assert(/^url\(#[a-z][a-z0-9-]*\)$/.test(attr.value), "Clips must use a local ID");
      if (attr.value.includes("url(")) {
        assert(
          ["fill", "stroke", "clip-path"].includes(attr.name),
          `Unexpected URL in ${attr.name}`,
        );
        refs.push({ node, attr: attr.name, id: attr.value.slice(5, -1) });
      }
    }
    const id = node.getAttribute("id");
    if (id) {
      assert(isIdentifier(id) && !ids.has(id), `Invalid or duplicate SVG ID: ${id}`);
      ids.set(id, node);
    }
    if (node.hasAttribute("data-color")) {
      assert(
        Object.hasOwn(rig.palette, node.getAttribute("data-color")!) &&
          /^#[0-9a-f]{6}$/i.test(node.getAttribute("fill")!),
        "Recolor groups need a known channel and a default hex fill",
      );
    }
  }
  for (const { node, attr, id } of refs) {
    const target = ids.get(id);
    assert(target, `Unresolved reference: #${id}`);
    assert(
      attr === "clip-path"
        ? target.tagName === "clipPath"
        : ["linearGradient", "radialGradient"].includes(target.tagName),
      `Incorrect reference type: #${id}`,
    );
    node.setAttribute(attr, `url(#${item.id}--${id})`);
  }
  for (const [id, node] of ids) node.setAttribute("id", `${item.id}--${id}`);
  const partNodes: XmlElement[] = [];
  const definitions: XmlElement[] = [];
  for (const node of children(root)) {
    if (node.tagName === "defs") definitions.push(node);
    else if (!["title", "desc"].includes(node.tagName)) {
      assert(
        node.tagName === "g" && node.hasAttribute("data-plane"),
        "Every drawing must be inside a top-level g with data-plane",
      );
      partNodes.push(node);
    }
  }
  const seen = new Set();
  for (const node of partNodes) {
    assert(
      node.getAttribute("stroke") === rig.outline &&
        Number(node.getAttribute("stroke-width")) === rig.strokeWidth &&
        node.getAttribute("stroke-linecap") === rig.strokeLinecap &&
        node.getAttribute("stroke-linejoin") === rig.strokeLinejoin,
      "Each drawing group needs explicit shared stroke, width, caps, and joins",
    );
    if (node.hasAttribute("data-fit"))
      assert(
        Object.hasOwn(rig.fitRegions, node.getAttribute("data-fit")!),
        "Unknown fitting region",
      );
    const plane = rig.planes.find((p) => p.id === node.getAttribute("data-plane"));
    assert(
      plane && plane.slots.includes(item.slot),
      `Invalid plane ${node.getAttribute("data-plane")} for ${item.slot}`,
    );
    assert(
      node.getAttribute("data-anchor") === plane.anchor,
      `Plane ${plane.id} must attach to ${plane.anchor}`,
    );
    assert(!seen.has(plane.id), `Duplicate plane ${plane.id}`);
    seen.add(plane.id);
    for (const child of elements(node).slice(1)) {
      assert(
        !child.hasAttribute("data-plane") &&
          !child.hasAttribute("data-anchor") &&
          !child.hasAttribute("data-fit"),
        "Attachment metadata belongs on top-level groups only",
      );
      assert(child.tagName !== "defs", "Put shared definitions in root defs");
    }
  }
  assert(partNodes.length, "No drawing parts found");
  if (item.slot === "full_body")
    assert(
      seen.has("shoe-far") && seen.has("shoe-near"),
      "Full outfits must include both shoe-far and shoe-near parts",
    );
  if (item.slot === "base") {
    const required = rig.planes.filter((p) => p.slots.includes("base"));
    assert(
      required.every((p) => seen.has(p.id)),
      "The fitting body must define every base plane",
    );
  }
  for (const node of elements(root)) {
    if (node.hasAttribute("data-color"))
      node.setAttribute("fill", `@color.${node.getAttribute("data-color")!}@`);
  }
  return {
    ...item,
    defs: definitions
      .map((node) =>
        children(node)
          .map((child) => serializer.serializeToString(child))
          .join(""),
      )
      .join(""),
    parts: partNodes.map((node) => ({
      plane: node.getAttribute("data-plane")!,
      anchor: node.getAttribute("data-anchor")!,
      fit: node.getAttribute("data-fit")! || null,
      markup: serializer.serializeToString(node),
    })),
  };
}
