import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "quilted-snow-parka",
  name: msg`Quilted snow parka`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
