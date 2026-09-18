import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "straight-leg-chinos",
  slot: "bottom",
  rarity: "common",
  name: msg`Chinos`,
  description: msg`Straight-leg trousers with side pockets.`,
} as const satisfies CosmeticMetadata;
