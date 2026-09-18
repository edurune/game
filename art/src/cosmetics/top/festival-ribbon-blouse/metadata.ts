import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "festival-ribbon-blouse",
  name: msg`Festival ribbon blouse`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
