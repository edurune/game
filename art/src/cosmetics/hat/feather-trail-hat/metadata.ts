import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "feather-trail-hat",
  name: msg`Feather trail hat`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
