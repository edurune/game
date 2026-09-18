import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pine-camp",
  name: msg`Pine camp`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
