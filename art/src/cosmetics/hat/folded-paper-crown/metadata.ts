import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "folded-paper-crown",
  name: msg`Paper crown`,
  slot: "hat",
  rarity: "common",
} as const satisfies CosmeticMetadata;
