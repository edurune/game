import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cozy-library",
  name: msg`Cozy library`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
