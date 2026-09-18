import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "clay-v-neck-tee",
  name: msg`Clay V-neck tee`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
