import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "scalloped-party-hat",
  name: msg`Scalloped party hat`,
  slot: "hat",
  rarity: "common",
} as const satisfies CosmeticMetadata;
