import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tide-pools",
  name: msg`Tide pools`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
