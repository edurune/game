import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tufted-mouse",
  name: msg`Tufted mouse`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
