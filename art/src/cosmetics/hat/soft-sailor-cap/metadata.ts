import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "soft-sailor-cap",
  name: msg`Sailor cap`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
