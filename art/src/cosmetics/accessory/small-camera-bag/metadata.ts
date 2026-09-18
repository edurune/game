import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "small-camera-bag",
  name: msg`Camera bag`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
