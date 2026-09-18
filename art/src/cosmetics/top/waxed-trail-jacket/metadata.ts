import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "waxed-trail-jacket",
  name: msg`Waxed trail jacket`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
