import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "garden-overalls",
  name: msg`Garden overalls`,
  slot: "full_body",
  rarity: "common",
} as const satisfies CosmeticMetadata;
