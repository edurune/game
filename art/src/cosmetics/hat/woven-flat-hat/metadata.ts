import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "woven-flat-hat",
  name: msg`Woven flat hat`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
