import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "russet-fox-cub",
  name: msg`Russet fox cub`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
