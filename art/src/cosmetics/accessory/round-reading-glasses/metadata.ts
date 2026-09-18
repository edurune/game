import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-reading-glasses",
  name: msg`Round glasses`,
  slot: "accessory",
  rarity: "common",
} as const satisfies CosmeticMetadata;
