import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "button-front-cardigan",
  name: msg`Button cardigan`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
