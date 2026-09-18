import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cream-kitten",
  name: msg`Cream kitten`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
