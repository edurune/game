import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "curled-chameleon",
  name: msg`Curly-tailed chameleon`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
