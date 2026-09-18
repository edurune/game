import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "field-binoculars",
  name: msg`Field binoculars`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
