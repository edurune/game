import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crystal-snail",
  name: msg`Crystal snail`,
  slot: "pet",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
