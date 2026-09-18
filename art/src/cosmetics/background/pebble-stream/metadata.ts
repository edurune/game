import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pebble-stream",
  name: msg`Pebble stream`,
  slot: "background",
  rarity: "common",
} as const satisfies CosmeticMetadata;
