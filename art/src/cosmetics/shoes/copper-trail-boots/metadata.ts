import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "copper-trail-boots",
  name: msg`Copper trail boots`,
  slot: "shoes",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
