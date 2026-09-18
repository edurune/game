import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "copper-flight-helmet",
  name: msg`Copper flight helmet`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
