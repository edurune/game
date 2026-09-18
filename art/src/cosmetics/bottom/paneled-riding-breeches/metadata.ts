import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "paneled-riding-breeches",
  name: msg`Paneled riding breeches`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
