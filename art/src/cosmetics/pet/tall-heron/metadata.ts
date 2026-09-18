import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tall-heron",
  name: msg`Tall heron`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
