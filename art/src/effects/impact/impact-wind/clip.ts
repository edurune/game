import type { EffectClip } from "../../types.ts";

export default {
  duration: 500,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [60, 1],
      [180, 1],
      [500, 0],
    ],
    scale: [
      [0, 0.6],
      [100, 1],
      [500, 1.15],
    ],
    y: [
      [0, 0],
      [500, 0],
    ],
  },
} as const satisfies EffectClip;
