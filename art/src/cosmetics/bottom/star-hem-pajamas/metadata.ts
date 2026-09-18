import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "star-hem-pajamas",
  name: msg`Star hem pajamas`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
