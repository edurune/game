import type { EffectClip } from "../../types.ts";

export default {
  duration: 400,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [50, 1],
      [150, 1],
      [400, 0],
    ],
    scale: [
      [0, 0.65],
      [90, 1],
      [400, 1.1],
    ],
    y: [
      [0, 0],
      [400, 0],
    ],
  },
} as const satisfies EffectClip;
