import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cropped-culottes",
  name: msg`Cropped culottes`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
