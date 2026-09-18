import type { EffectClip } from "../../types.ts";

export default {
  duration: 780,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [80, 1],
      [380, 1],
      [780, 0],
    ],
    scale: [
      [0, 0.75],
      [250, 1],
      [780, 1.08],
    ],
    y: [
      [0, 0],
      [780, 8],
    ],
  },
} as const satisfies EffectClip;
