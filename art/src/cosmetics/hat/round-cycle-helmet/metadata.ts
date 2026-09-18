import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-cycle-helmet",
  name: msg`Cycling helmet`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
