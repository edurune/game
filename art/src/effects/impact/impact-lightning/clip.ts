import type { EffectClip } from "../../types.ts";

export default {
  duration: 420,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [60, 1],
      [160, 1],
      [420, 0],
    ],
    scale: [
      [0, 0.8],
      [90, 1],
      [420, 1.05],
    ],
    y: [
      [0, 0],
      [420, 0],
    ],
  },
} as const satisfies EffectClip;
