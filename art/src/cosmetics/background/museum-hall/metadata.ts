import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "museum-hall",
  name: msg`Museum hall`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
