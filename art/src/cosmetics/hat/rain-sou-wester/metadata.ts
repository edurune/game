import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "rain-sou-wester",
  name: msg`Rain hat`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
