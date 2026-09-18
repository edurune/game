import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-bear-cub",
  name: msg`Little bear cub`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
