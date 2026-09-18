import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "panel-patch-trousers",
  name: msg`Patchwork trousers`,
  slot: "bottom",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
