import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "striped-long-scarf",
  name: msg`Striped scarf`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
