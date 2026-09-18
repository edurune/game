import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "star-window-frames",
  name: msg`Star glasses`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
