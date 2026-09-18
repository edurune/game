import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "snowy-pines",
  name: msg`Snowy pines`,
  slot: "background",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
