import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-panel-vest",
  name: msg`Leaf-panel vest`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
