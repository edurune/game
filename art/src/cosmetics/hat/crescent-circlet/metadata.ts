import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crescent-circlet",
  name: msg`Crescent circlet`,
  slot: "hat",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
