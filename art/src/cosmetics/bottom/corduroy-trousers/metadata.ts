import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "corduroy-trousers",
  name: msg`Corduroy trousers`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
