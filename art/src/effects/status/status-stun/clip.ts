import type { EffectClip } from "../../types.ts";

export default {
  duration: 1400,
  anchor: "head",
  tracks: {
    opacity: [
      [0, 0],
      [160, 1],
      [1000, 1],
      [1400, 0],
    ],
    scale: [
      [0, 0.8],
      [240, 1],
      [1400, 1],
    ],
    y: [
      [0, 3],
      [700, -5],
      [1400, 3],
    ],
  },
} as const satisfies EffectClip;
