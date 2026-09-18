import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "hilltop-windmill",
  name: msg`Hilltop windmill`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
