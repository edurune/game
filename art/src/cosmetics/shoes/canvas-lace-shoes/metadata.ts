import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "canvas-lace-shoes",
  slot: "shoes",
  rarity: "common",
  name: msg`Canvas shoes`,
  description: msg`Simple lace-up canvas shoes.`,
} as const satisfies CosmeticMetadata;
