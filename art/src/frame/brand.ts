import type { BrandMetadata } from "../types.ts";
import type { ArtFrame } from "./types.ts";
import characterFrame from "./rig.ts";
import iconFrame from "./ui-icons.ts";

export default {
  mark: {
    id: "brand-mark-v1",
    viewBox: characterFrame.viewBox,
    safeBounds: characterFrame.safeBounds,
    strokeWidth: characterFrame.strokeWidth,
    planes: ["brand"],
    reviewSizes: [32, 64, 160, 320],
  },
  wordmark: {
    id: "brand-wordmark-v1",
    viewBox: [0, 0, 768, 192],
    safeBounds: [16, 12, 752, 180],
    strokeWidth: characterFrame.strokeWidth,
    planes: ["brand"],
    reviewSizes: [144, 240, 384, 768],
  },
  favicon: {
    id: "brand-favicon-v1",
    viewBox: iconFrame.viewBox,
    safeBounds: [1, 1, 31, 31],
    strokeWidth: iconFrame.strokeWidth,
    planes: ["brand"],
    reviewSizes: [16, 24, 32, 48],
  },
} as const satisfies Record<
  BrandMetadata["kind"],
  ArtFrame & { strokeWidth: number; reviewSizes: readonly number[] }
>;
