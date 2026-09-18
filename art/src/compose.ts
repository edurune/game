import type { ArtItem, ArtRig, ComposeOptions, Palette } from "./types.ts";
import { motionAttributes, sampleMotion } from "./motion/sample.ts";
export const hiddenByFullBody = ["top", "bottom", "shoes", "hat", "accessory"];

export function visibleItems(items: ArtItem[], selected: string[]) {
  const active = selected.map((id) => {
    const item = items.find((candidate) => candidate.id === id);
    if (!item) throw new Error(`Unknown item: ${id}`);
    return item;
  });
  if (new Set(active.map((item) => item.slot)).size !== active.length) {
    throw new Error("Select at most one item per slot");
  }
  return active.some((item) => item.slot === "full_body")
    ? active.filter((item) => !hiddenByFullBody.includes(item.slot))
    : active;
}

export function orderedParts(rig: ArtRig, items: ArtItem[], selected: string[]) {
  return visibleItems(items, selected)
    .flatMap((item) => item.parts.map((part) => ({ ...part, item: item.id })))
    .sort(
      (a, b) =>
        rig.planes.findIndex((p) => p.id === a.plane) -
        rig.planes.findIndex((p) => p.id === b.plane),
    );
}

export function compose(
  rig: ArtRig,
  items: ArtItem[],
  selected: string[],
  options: ComposeOptions = {},
) {
  const pose = rig.poses[options.pose ?? "rest"];
  if (!pose) throw new Error("Unknown pose");
  const motion = options.motion;
  if (motion && options.pose && options.pose !== "rest")
    throw new Error("Preview a pose or motion, not both");
  const state = motion ? sampleMotion(motion.definition, motion.clip, motion.time, rig) : {};
  const palette = { ...rig.palette, ...options.palette };
  for (const color of Object.values(palette)) {
    if (!/^#[0-9a-f]{6}$/i.test(color)) throw new Error("Colors must be six-digit hex values");
  }
  const instance = options.instance ?? "preview";
  if (!/^[a-z][a-z0-9-]*$/.test(instance)) throw new Error("Invalid composition instance ID");
  const materialize = (markup: string) =>
    markup
      .replace(/<g\b([^>]*)>/g, (match, attributes) => {
        if (!motion) return match;
        const id = attributes.match(/\bid="([^"]+)"/)?.[1];
        const group = Object.keys(motion.definition.groups).find(
          (name) => id === `${motion.owner}--${name}`,
        );
        return group ? `<g ${attributes} ${motionAttributes(`group:${group}`, state)}>` : match;
      })
      .replace(/@color\.(skin|hair|eyes)@/g, (_, key: keyof Palette) => palette[key] ?? "")
      .replace(/\bid="([^"]+)"/g, (_, id) => `id="${instance}--${id}"`)
      .replace(/url\(#/g, `url(#${instance}--`);
  const active = visibleItems(items, selected);
  const defs = active.map((item) => materialize(item.defs)).join("");
  const parts = orderedParts(rig, items, selected).filter(
    (part) => !options.hidden?.includes(`${part.item}/${part.plane}`),
  );
  const body = parts
    .map((part, index) => {
      const anchor = rig.anchors[part.anchor];
      if (!anchor) throw new Error(`Unknown anchor: ${part.anchor}`);
      const [x, y] = anchor;
      const rotate = `rotate(${pose[part.anchor] ?? 0} ${x} ${y})`;
      const offset = options.explode
        ? `translate(${(index - parts.length / 2) * 11} ${(index - parts.length / 2) * -5})`
        : "";
      const animated = motionAttributes(`anchor:${part.anchor}`, state);
      return `<g data-item="${part.item}" data-part="${part.plane}" ${animated || `transform="${offset} ${rotate}"`}>${materialize(part.markup)}</g>`;
    })
    .join("");
  const viewBox = options.explode ? "-120 -80 560 480" : rig.viewBox.join(" ");
  const mirror = options.mirror ? `translate(${rig.viewBox[2]} 0) scale(-1 1)` : "";
  const animatedBody = motion ? `<g ${motionAttributes("root", state)}>${body}</g>` : body;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${rig.viewBox[2]}" height="${rig.viewBox[3]}" viewBox="${viewBox}"><defs>${defs}</defs><g transform="${mirror}">${animatedBody}</g></svg>`;
}
