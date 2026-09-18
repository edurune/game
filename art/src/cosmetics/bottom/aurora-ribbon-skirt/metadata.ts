import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "aurora-ribbon-skirt",
  name: msg`Aurora ribbon skirt`,
  slot: "bottom",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
