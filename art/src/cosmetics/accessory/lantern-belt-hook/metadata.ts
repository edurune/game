import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "lantern-belt-hook",
  name: msg`Belt lantern`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
