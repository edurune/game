import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "indigo-block-tee",
  name: msg`Indigo panel tee`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
