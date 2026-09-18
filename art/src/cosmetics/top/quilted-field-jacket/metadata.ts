import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "quilted-field-jacket",
  name: msg`Quilted field jacket`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
