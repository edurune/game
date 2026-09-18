import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ribbed-track-pants",
  name: msg`Ribbed track pants`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
