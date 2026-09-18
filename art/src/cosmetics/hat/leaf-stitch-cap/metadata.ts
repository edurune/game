import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-stitch-cap",
  name: msg`Leaf-stitch cap`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
