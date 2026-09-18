import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "rainy-day-set",
  name: msg`Rainy day set`,
  slot: "full_body",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
