import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "frog-eye-cap",
  name: msg`Frog cap`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
