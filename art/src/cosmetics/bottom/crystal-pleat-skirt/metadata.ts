import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crystal-pleat-skirt",
  name: msg`Crystal pleated skirt`,
  slot: "bottom",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
