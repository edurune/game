import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "folded-sleeve-shirt",
  name: msg`Rolled-sleeve shirt`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
