import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ochre-site-helmet",
  name: msg`Ochre hard hat`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
