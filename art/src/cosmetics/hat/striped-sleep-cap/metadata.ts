import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "striped-sleep-cap",
  name: msg`Striped nightcap`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
