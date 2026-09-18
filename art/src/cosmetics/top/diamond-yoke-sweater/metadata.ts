import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "diamond-yoke-sweater",
  name: msg`Diamond-yoke sweater`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
