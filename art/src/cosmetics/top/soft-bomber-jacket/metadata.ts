import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "soft-bomber-jacket",
  name: msg`Bomber jacket`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
