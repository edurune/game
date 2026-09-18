import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "lantern-festival-skirt",
  name: msg`Lantern festival skirt`,
  slot: "bottom",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
