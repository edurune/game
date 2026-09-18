import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "barn-owl",
  name: msg`Barn owl`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
