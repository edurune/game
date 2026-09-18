import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "quilted-pocket-vest",
  name: msg`Quilted pocket vest`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
