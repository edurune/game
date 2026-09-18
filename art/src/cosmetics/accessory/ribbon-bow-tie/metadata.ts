import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ribbon-bow-tie",
  name: msg`Ribbon bow tie`,
  slot: "accessory",
  rarity: "common",
} as const satisfies CosmeticMetadata;
