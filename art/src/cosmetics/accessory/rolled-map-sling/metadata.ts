import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "rolled-map-sling",
  name: msg`Map sling`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
