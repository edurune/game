import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "shawl-collar-cardigan",
  name: msg`Shawl-collar cardigan`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
