import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ribbed-watch-cap",
  name: msg`Ribbed beanie`,
  slot: "hat",
  rarity: "common",
} as const satisfies CosmeticMetadata;
