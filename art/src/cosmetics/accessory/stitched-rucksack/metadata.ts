import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "stitched-rucksack",
  name: msg`Stitched rucksack`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
