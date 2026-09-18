import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "rolled-cuff-denim",
  name: msg`Cuffed jeans`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
