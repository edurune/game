import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "workshop-leather-apron",
  name: msg`Leather workshop apron`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
