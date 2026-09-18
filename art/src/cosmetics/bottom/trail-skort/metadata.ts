import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "trail-skort",
  name: msg`Trail skort`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
