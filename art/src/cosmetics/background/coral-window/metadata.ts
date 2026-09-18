import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "coral-window",
  name: msg`Coral window`,
  slot: "background",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
