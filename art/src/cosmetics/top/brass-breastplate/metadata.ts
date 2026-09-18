import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "brass-breastplate",
  name: msg`Brass breastplate`,
  slot: "top",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
