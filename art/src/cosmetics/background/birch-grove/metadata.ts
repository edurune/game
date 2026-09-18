import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "birch-grove",
  name: msg`Birch grove`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
