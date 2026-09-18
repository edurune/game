import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "long-beak-toucan",
  name: msg`Long-beak toucan`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
