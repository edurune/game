import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tulip-wrap-shorts",
  name: msg`Tulip wrap shorts`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
