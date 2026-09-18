import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "stargazer-pointed-hat",
  name: msg`Stargazer hat`,
  slot: "hat",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
