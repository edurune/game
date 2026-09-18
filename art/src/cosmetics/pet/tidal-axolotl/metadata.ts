import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tidal-axolotl",
  name: msg`Tidal axolotl`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
