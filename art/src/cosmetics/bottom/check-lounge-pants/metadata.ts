import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "check-lounge-pants",
  name: msg`Checked lounge pants`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
