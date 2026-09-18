import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "letter-envelope-bag",
  name: msg`Envelope bag`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
