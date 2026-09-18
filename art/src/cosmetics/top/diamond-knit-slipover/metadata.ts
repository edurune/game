import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "diamond-knit-slipover",
  name: msg`Diamond-knit slipover`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
