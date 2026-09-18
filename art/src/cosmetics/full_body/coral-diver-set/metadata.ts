import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "coral-diver-set",
  name: msg`Coral diver`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
