import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "bell-calf",
  name: msg`Bell calf`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
