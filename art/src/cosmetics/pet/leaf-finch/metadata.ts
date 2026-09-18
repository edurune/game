import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-finch",
  name: msg`Leaf finch`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
