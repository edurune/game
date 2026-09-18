import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-embroidered-pants",
  name: msg`Leaf-embroidered pants`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
