import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "sari",
  name: msg`Sari`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
