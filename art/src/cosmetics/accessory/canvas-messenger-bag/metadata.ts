import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "canvas-messenger-bag",
  name: msg`Canvas satchel`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
