import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "aurora-ribbon-cape",
  name: msg`Aurora cape`,
  slot: "accessory",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
