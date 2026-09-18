import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crystal-panel-bodice",
  name: msg`Crystal bodice`,
  slot: "top",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
