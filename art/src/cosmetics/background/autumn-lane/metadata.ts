import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "autumn-lane",
  name: msg`Autumn lane`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
