import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "brass-compass-pendant",
  name: msg`Compass pendant`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
