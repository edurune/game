import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "oval-sun-glasses",
  name: msg`Oval sunglasses`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
