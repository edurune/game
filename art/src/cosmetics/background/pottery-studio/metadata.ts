import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pottery-studio",
  name: msg`Pottery studio`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
