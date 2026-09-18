import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "boat-stripe-shirt",
  name: msg`Sailboat stripe shirt`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
