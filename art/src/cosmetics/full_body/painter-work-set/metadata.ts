import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "painter-work-set",
  name: msg`Painter’s workwear`,
  slot: "full_body",
  rarity: "common",
} as const satisfies CosmeticMetadata;
