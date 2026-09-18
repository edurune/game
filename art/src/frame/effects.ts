import type { EffectFrame } from "./types.ts";

export default {
  id: "battle-effect-v1",
  viewBox: [0, 0, 320, 320],
  safeBounds: [16, 16, 304, 304],
  baseline: 160,
  planes: ["back", "front"],
  scaleByKind: {
    impact: 0.6,
    healing: 0.75,
    shield: 1,
    status: 0.48,
  },
  playerAnchors: {
    body: [160, 188],
    head: [160, 45],
    ground: [160, 282],
  },
  enemyHeadClearance: 18,
} as const satisfies EffectFrame;
