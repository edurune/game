import type { ArtFrame } from "./frame/types.ts";
import type { ArtRig } from "./types.ts";
export function artRig<T extends ArtFrame>(
  frame: T,
  style: ArtRig,
  slots: string | string[],
): Omit<T, keyof ArtRig> & ArtRig {
  return {
    ...frame,
    baseline: frame.baseline ?? frame.viewBox[3],
    outline: style.outline,
    strokeWidth: style.strokeWidth,
    strokeLinecap: style.strokeLinecap,
    strokeLinejoin: style.strokeLinejoin,
    palette: {},
    materialPalette: style.materialPalette,
    fitRegions: {},
    coverageChecks: [],
    anchors: { root: [frame.viewBox[2] / 2, frame.baseline ?? frame.viewBox[3]] },
    planes: frame.planes.map((id) => ({
      id,
      anchor: "root",
      slots: Array.isArray(slots) ? slots : [slots],
    })),
    poses: { rest: {} },
  };
}
