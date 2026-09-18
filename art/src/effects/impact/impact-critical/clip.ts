import type { EffectClip } from "../../types.ts";

export default {
  duration: 520,
  anchor: "body",
  tracks: {
    opacity: [
      [0, 0],
      [60, 1],
      [200, 1],
      [520, 0],
    ],
    scale: [
      [0, 0.6],
      [100, 1.1],
      [180, 1],
      [520, 1.15],
    ],
    y: [
      [0, 0],
      [520, 0],
    ],
  },
} as const satisfies EffectClip;
