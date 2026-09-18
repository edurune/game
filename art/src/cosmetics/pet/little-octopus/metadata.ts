import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "little-octopus",
  name: msg`Little octopus`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
