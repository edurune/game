import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "kurta",
  name: msg`Kurta`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
