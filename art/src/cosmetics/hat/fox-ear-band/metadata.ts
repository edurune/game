import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "fox-ear-band",
  name: msg`Fox-ear headband`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
