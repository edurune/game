import type { EffectClip } from "../../types.ts";

export default {
  duration: 1400,
  anchor: "head",
  tracks: {
    opacity: [
      [0, 0],
      [180, 1],
      [1000, 1],
      [1400, 0],
    ],
    scale: [
      [0, 0.65],
      [280, 1],
      [1400, 1],
    ],
    y: [
      [0, 0],
      [1400, -6],
    ],
  },
} as const satisfies EffectClip;
