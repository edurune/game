import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "orchard-print-shirt",
  name: msg`Orchard print shirt`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
