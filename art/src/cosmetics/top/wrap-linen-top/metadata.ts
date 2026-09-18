import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "wrap-linen-top",
  name: msg`Linen wrap top`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
