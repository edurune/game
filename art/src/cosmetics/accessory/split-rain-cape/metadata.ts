import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "split-rain-cape",
  name: msg`Split rain cape`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
