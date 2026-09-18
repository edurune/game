import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "small-goat",
  name: msg`Little goat`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
