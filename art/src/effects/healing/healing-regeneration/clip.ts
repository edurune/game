import type { EffectClip } from "../../types.ts";

export default {
  duration: 1600,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [240, 1],
      [1100, 1],
      [1600, 0],
    ],
    scale: [
      [0, 0.85],
      [500, 1],
      [1600, 1.1],
    ],
    y: [
      [0, 10],
      [1600, -18],
    ],
  },
} as const satisfies EffectClip;
