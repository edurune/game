import type { EffectClip } from "../../types.ts";

export default {
  duration: 1200,
  anchor: "head",
  tracks: {
    opacity: [
      [0, 0],
      [160, 1],
      [820, 1],
      [1200, 0],
    ],
    scale: [
      [0, 0.75],
      [250, 1],
      [1200, 1],
    ],
    y: [
      [0, 10],
      [1200, -12],
    ],
  },
} as const satisfies EffectClip;
