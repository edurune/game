import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "seed-pocket-belt",
  name: msg`Seed pouch belt`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
