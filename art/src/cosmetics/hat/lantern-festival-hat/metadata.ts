import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "lantern-festival-hat",
  name: msg`Lantern festival hat`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
