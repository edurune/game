import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sailor-sleeveless-top",
  name: msg`Sailor sleeveless top`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
