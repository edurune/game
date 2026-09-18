import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "kebaya",
  name: msg`Kebaya`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
