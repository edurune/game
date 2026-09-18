import type { EffectClip } from "../../types.ts";

export default {
  duration: 560,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [60, 1],
      [200, 1],
      [560, 0],
    ],
    scale: [
      [0, 0.55],
      [110, 1],
      [560, 1.1],
    ],
    y: [
      [0, 0],
      [560, 6],
    ],
  },
} as const satisfies EffectClip;
