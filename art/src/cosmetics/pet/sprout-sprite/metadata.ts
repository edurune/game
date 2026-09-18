import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sprout-sprite",
  name: msg`Sprout sprite`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
