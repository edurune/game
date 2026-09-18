import type { IconFrame } from "./types.ts";

export default {
  id: "combat-ui-icon-v1",
  viewBox: [0, 0, 32, 32],
  safeBounds: [2, 2, 30, 30],
  baseline: 16,
  strokeWidth: 2,
  darkOutline: "#f4eddc",
  planes: ["icon"],
  reviewSizes: [24, 32, 48, 64],
} as const satisfies IconFrame;
