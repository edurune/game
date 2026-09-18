import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "quilted-trapper",
  name: msg`Quilted trapper hat`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
