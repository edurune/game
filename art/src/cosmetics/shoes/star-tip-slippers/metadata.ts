import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "star-tip-slippers",
  name: msg`Star-tip slippers`,
  slot: "shoes",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
