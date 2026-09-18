import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "brass-plate-tassets",
  name: msg`Brass tassets`,
  slot: "bottom",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
