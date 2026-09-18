import type { EffectClip } from "../../types.ts";

export default {
  duration: 1300,
  anchor: "head",
  tracks: {
    opacity: [
      [0, 0],
      [180, 1],
      [900, 1],
      [1300, 0],
    ],
    scale: [
      [0, 0.8],
      [280, 1],
      [1300, 1],
    ],
    y: [
      [0, -10],
      [1300, 8],
    ],
  },
} as const satisfies EffectClip;
