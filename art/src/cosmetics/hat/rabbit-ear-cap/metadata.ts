import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "rabbit-ear-cap",
  name: msg`Rabbit-ear cap`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
