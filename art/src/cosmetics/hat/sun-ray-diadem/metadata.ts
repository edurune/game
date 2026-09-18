import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sun-ray-diadem",
  name: msg`Sunray diadem`,
  slot: "hat",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
