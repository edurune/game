import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-fold-hat",
  name: msg`Folded leaf hat`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
