import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "bear-ear-beanie",
  name: msg`Bear-ear beanie`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
