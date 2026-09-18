import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "knotted-work-band",
  name: msg`Knotted headband`,
  slot: "hat",
  rarity: "common",
} as const satisfies CosmeticMetadata;
