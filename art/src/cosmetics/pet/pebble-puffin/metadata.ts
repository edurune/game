import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pebble-puffin",
  name: msg`Pebble puffin`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
