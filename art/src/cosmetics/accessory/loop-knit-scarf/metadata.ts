import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "loop-knit-scarf",
  name: msg`Loop scarf`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
