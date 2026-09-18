import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "book-locket",
  name: msg`Book locket`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
