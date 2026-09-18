import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "stitched-work-trousers",
  name: msg`Stitched work trousers`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
