import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "picnic-basket-bag",
  name: msg`Picnic basket`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
