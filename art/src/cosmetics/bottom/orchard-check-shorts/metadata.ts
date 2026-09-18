import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "orchard-check-shorts",
  name: msg`Orchard check shorts`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
