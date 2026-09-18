import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "soft-long-tie",
  name: msg`Long tie`,
  slot: "accessory",
  rarity: "common",
} as const satisfies CosmeticMetadata;
