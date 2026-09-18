import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "brass-toe-greaves",
  name: msg`Brass-toe greaves`,
  slot: "shoes",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
