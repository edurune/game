import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "soft-square-glasses",
  name: msg`Square glasses`,
  slot: "accessory",
  rarity: "common",
} as const satisfies CosmeticMetadata;
