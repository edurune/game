import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "petal-hem-skirt",
  name: msg`Petal hem skirt`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
