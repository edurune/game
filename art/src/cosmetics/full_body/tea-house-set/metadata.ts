import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tea-house-set",
  name: msg`Tea house set`,
  slot: "full_body",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
