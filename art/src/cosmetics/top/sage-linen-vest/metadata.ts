import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sage-linen-vest",
  name: msg`Sage linen vest`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
