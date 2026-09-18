import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "zip-trail-vest",
  name: msg`Zip trail vest`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
