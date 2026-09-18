import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "stargazer-robe-set",
  name: msg`Stargazer robes`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
