import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "zigzag-knit-shorts",
  name: msg`Zigzag knit shorts`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
