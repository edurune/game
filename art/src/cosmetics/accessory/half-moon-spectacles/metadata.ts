import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "half-moon-spectacles",
  name: msg`Half-moon glasses`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
