import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "fencing-practice-set",
  name: msg`Fencing uniform`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
