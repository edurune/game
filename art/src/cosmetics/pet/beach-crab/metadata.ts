import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "beach-crab",
  name: msg`Beach crab`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
