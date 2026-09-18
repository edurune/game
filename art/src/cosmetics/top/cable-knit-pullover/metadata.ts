import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cable-knit-pullover",
  name: msg`Cable-knit pullover`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
