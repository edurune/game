import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "medallion-ribbon",
  name: msg`Ribbon medallion`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
