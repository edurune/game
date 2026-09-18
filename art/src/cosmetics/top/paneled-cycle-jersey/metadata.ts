import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "paneled-cycle-jersey",
  name: msg`Panel cycling jersey`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
