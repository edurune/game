import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "apron-pocket-skirt",
  name: msg`Apron pocket skirt`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
