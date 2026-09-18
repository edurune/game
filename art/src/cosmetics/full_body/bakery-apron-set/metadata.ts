import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "bakery-apron-set",
  name: msg`Baker’s apron set`,
  slot: "full_body",
  rarity: "common",
} as const satisfies CosmeticMetadata;
