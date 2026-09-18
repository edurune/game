import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tulip-petal-jacket",
  name: msg`Tulip petal jacket`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
