import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "orchard-worker-set",
  name: msg`Orchard worker`,
  slot: "full_body",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
