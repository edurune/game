import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "scalloped-shell-skirt",
  name: msg`Shell hem skirt`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
