import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-hedgehog",
  name: msg`Leaf hedgehog`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
