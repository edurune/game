import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "rain-shell-trousers",
  name: msg`Rain trousers`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
