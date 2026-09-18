import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sailor-button-shorts",
  name: msg`Sailor button shorts`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
