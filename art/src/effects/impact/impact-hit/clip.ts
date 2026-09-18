import type { EffectClip } from "../../types.ts";

export default {
  duration: 380,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [50, 1],
      [140, 1],
      [380, 0],
    ],
    scale: [
      [0, 0.5],
      [80, 1],
      [380, 1.15],
    ],
    y: [
      [0, 0],
      [380, 0],
    ],
  },
} as const satisfies EffectClip;
