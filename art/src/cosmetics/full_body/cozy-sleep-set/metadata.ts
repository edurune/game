import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cozy-sleep-set",
  name: msg`Cozy pajamas`,
  slot: "full_body",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
