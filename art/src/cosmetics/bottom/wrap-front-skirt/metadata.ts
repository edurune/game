import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "wrap-front-skirt",
  name: msg`Wrap skirt`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
