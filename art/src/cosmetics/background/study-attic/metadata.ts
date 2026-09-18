import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "study-attic",
  name: msg`Attic study`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
