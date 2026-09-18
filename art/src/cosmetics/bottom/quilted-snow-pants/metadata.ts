import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "quilted-snow-pants",
  name: msg`Quilted snow pants`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
