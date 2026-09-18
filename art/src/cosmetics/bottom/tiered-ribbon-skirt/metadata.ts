import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tiered-ribbon-skirt",
  name: msg`Tiered ribbon skirt`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
