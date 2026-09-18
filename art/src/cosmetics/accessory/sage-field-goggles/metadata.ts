import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sage-field-goggles",
  name: msg`Field goggles`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
