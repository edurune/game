import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "spiral-snail",
  name: msg`Spiral snail`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
