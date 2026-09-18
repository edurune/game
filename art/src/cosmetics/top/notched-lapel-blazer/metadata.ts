import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "notched-lapel-blazer",
  name: msg`Notched-lapel blazer`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
