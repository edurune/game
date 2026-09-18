import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "linen-bucket-hat",
  name: msg`Linen bucket hat`,
  slot: "hat",
  rarity: "common",
} as const satisfies CosmeticMetadata;
