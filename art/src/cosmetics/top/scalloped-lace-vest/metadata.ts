import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "scalloped-lace-vest",
  name: msg`Scalloped lace vest`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
