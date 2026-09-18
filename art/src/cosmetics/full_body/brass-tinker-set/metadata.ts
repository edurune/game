import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "brass-tinker-set",
  name: msg`Brass tinkerer`,
  slot: "full_body",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
