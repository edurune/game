import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "feather-trim-coat",
  name: msg`Feather-trim coat`,
  slot: "top",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
