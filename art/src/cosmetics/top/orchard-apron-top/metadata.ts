import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "orchard-apron-top",
  name: msg`Orchard apron top`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
