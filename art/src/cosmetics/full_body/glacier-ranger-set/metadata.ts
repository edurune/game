import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "glacier-ranger-set",
  name: msg`Glacier ranger`,
  slot: "full_body",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
