import type { EffectClip } from "../../types.ts";

export default {
  duration: 1600,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [220, 1],
      [1150, 1],
      [1600, 0],
    ],
    scale: [
      [0, 0.7],
      [300, 1],
      [1600, 1],
    ],
    y: [
      [0, 0],
      [1600, 0],
    ],
  },
} as const satisfies EffectClip;
