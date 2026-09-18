import type { ArtRig } from "../types.ts";
import type { ClipName, MotionDefinition } from "./types.ts";
import { sampleMotion } from "./sample.ts";

// Bind once per composition; update attributes instead of rebuilding the SVG or catalog.
export function bindMotion(root: Element, definition: MotionDefinition, rig: ArtRig) {
  const nodes = [...root.querySelectorAll<SVGElement>("[data-motion]")];
  return (clip: ClipName, time: number) => {
    const state = sampleMotion(definition, clip, time, rig);
    for (const node of nodes) {
      const value = state[node.dataset.motion ?? ""];
      if (!value) continue;
      node.setAttribute("transform", value.transform);
      node.setAttribute("opacity", String(value.opacity));
    }
  };
}
