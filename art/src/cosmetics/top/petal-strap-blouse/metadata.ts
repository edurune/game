import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "petal-strap-blouse",
  name: msg`Petal-strap blouse`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
