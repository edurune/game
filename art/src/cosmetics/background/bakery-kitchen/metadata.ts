import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "bakery-kitchen",
  name: msg`Bakery kitchen`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
