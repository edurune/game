import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "side-button-skirt",
  name: msg`Side-button skirt`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
