import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-caterpillar",
  name: msg`Leaf caterpillar`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
