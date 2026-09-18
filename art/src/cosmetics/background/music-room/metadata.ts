import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "music-room",
  name: msg`Music room`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
