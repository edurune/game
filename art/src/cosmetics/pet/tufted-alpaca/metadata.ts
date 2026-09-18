import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tufted-alpaca",
  name: msg`Tufted alpaca`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
