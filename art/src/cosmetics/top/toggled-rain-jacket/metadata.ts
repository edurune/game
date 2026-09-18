import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "toggled-rain-jacket",
  name: msg`Toggle rain jacket`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
