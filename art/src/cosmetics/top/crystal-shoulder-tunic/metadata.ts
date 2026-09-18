import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crystal-shoulder-tunic",
  name: msg`Crystal-shoulder tunic`,
  slot: "top",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
