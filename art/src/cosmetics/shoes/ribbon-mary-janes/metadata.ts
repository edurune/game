import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ribbon-mary-janes",
  name: msg`Ribbon strap shoes`,
  slot: "shoes",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
