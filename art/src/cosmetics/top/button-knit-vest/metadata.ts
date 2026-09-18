import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "button-knit-vest",
  name: msg`Button knit vest`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
