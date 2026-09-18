import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "bedroll-travel-pack",
  name: msg`Bedroll pack`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
