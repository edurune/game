import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "chefs-button-jacket",
  name: msg`Chef’s jacket`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
