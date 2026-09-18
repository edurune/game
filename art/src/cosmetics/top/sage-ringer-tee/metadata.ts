import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sage-ringer-tee",
  name: msg`Sage ringer tee`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
