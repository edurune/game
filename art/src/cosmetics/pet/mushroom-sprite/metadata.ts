import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "mushroom-sprite",
  name: msg`Mushroom sprite`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
