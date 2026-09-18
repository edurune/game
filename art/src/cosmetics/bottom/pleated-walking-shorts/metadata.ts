import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pleated-walking-shorts",
  name: msg`Pleated walking shorts`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
