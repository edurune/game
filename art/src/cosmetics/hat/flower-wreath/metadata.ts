import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "flower-wreath",
  name: msg`Flower wreath`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
