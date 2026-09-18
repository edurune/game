import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "aurora-wing-circlet",
  name: msg`Aurora wing circlet`,
  slot: "hat",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
