import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "fleece-cuff-boots",
  name: msg`Fleece-cuff boots`,
  slot: "shoes",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
