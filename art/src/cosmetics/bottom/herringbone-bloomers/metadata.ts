import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "herringbone-bloomers",
  name: msg`Herringbone bloomers`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
