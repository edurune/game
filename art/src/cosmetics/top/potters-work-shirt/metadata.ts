import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "potters-work-shirt",
  name: msg`Potter’s work shirt`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
