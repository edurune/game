import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pebble-seal",
  name: msg`Pebble seal`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
