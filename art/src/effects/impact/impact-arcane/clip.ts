import type { EffectClip } from "../../types.ts";

export default {
  duration: 560,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [60, 1],
      [210, 1],
      [560, 0],
    ],
    scale: [
      [0, 0.55],
      [100, 1],
      [560, 1.15],
    ],
    y: [
      [0, 0],
      [560, 0],
    ],
  },
} as const satisfies EffectClip;
