import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "terraced-garden",
  name: msg`Terraced garden`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
