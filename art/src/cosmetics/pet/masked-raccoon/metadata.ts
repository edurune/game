import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "masked-raccoon",
  name: msg`Masked raccoon`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
