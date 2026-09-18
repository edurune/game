import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tulip-petal-hat",
  name: msg`Tulip petal hat`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
