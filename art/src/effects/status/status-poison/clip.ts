import type { EffectClip } from "../../types.ts";

export default {
  duration: 1500,
  anchor: "head",
  tracks: {
    opacity: [
      [0, 0],
      [200, 1],
      [1050, 1],
      [1500, 0],
    ],
    scale: [
      [0, 0.8],
      [300, 1],
      [1500, 1],
    ],
    y: [
      [0, 4],
      [1500, -12],
    ],
  },
} as const satisfies EffectClip;
