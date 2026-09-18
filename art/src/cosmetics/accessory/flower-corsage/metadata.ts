import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "flower-corsage",
  name: msg`Flower corsage`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
