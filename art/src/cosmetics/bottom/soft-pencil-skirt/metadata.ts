import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "soft-pencil-skirt",
  name: msg`Pencil skirt`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
