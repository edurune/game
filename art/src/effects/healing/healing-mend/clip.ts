import type { EffectClip } from "../../types.ts";

export default {
  duration: 1200,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [180, 1],
      [780, 1],
      [1200, 0],
    ],
    scale: [
      [0, 0.8],
      [350, 1],
      [1200, 1.05],
    ],
    y: [
      [0, 12],
      [1200, -20],
    ],
  },
} as const satisfies EffectClip;
