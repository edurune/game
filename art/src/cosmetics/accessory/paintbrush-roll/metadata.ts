import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "paintbrush-roll",
  name: msg`Brush roll`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
