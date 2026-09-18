import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cream-pocket-tee",
  slot: "top",
  rarity: "common",
  name: msg`T-shirt`,
  description: msg`Cream T-shirt with a green chest pocket.`,
} as const satisfies CosmeticMetadata;
