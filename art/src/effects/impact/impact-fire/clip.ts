import type { EffectClip } from "../../types.ts";

export default {
  duration: 600,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [70, 1],
      [240, 1],
      [600, 0],
    ],
    scale: [
      [0, 0.55],
      [120, 1],
      [600, 1.1],
    ],
    y: [
      [0, 0],
      [600, -8],
    ],
  },
} as const satisfies EffectClip;
