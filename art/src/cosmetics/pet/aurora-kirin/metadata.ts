import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "aurora-kirin",
  name: msg`Aurora kirin`,
  slot: "pet",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
