import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "festival-dancer-set",
  name: msg`Festival dancer`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
