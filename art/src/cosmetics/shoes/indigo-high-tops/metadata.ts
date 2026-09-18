import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "indigo-high-tops",
  name: msg`Indigo high-tops`,
  slot: "shoes",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
