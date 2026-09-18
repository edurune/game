import type { EffectClip } from "../../types.ts";

export default {
  duration: 1300,
  anchor: "head",
  tracks: {
    opacity: [
      [0, 0],
      [160, 1],
      [900, 1],
      [1300, 0],
    ],
    scale: [
      [0, 0.8],
      [260, 1],
      [650, 0.95],
      [950, 1],
      [1300, 1],
    ],
    y: [
      [0, 4],
      [1300, -10],
    ],
  },
} as const satisfies EffectClip;
