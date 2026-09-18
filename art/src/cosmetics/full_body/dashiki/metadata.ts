import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "dashiki",
  name: msg`Dashiki`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
