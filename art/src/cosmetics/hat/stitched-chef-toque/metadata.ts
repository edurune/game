import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "stitched-chef-toque",
  name: msg`Chef’s hat`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
