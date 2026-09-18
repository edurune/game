import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "comet-sash-trousers",
  name: msg`Comet sash trousers`,
  slot: "bottom",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
