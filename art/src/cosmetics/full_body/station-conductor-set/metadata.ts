import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "station-conductor-set",
  name: msg`Station conductor`,
  slot: "full_body",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
