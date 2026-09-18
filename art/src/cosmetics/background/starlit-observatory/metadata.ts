import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "starlit-observatory",
  name: msg`Starlit observatory`,
  slot: "background",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
