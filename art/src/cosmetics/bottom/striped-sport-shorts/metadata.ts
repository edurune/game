import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "striped-sport-shorts",
  name: msg`Striped sport shorts`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
