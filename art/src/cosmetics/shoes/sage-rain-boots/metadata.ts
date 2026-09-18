import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sage-rain-boots",
  name: msg`Sage rain boots`,
  slot: "shoes",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
