import type { EffectClip } from "../../types.ts";

export default {
  duration: 800,
  anchor: "ground",
  tracks: {
    opacity: [
      [0, 0],
      [100, 1],
      [440, 0.8],
      [800, 0],
    ],
    scale: [
      [0, 0.55],
      [350, 1],
      [800, 1.2],
    ],
    y: [
      [0, 0],
      [800, -10],
    ],
  },
} as const satisfies EffectClip;
