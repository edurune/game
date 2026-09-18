import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-trail-canteen",
  name: msg`Trail canteen`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
