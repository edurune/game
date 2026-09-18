import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crystal-wing-pair",
  name: msg`Crystal wings`,
  slot: "accessory",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
