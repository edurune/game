import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "feather-wing-pair",
  name: msg`Feather wings`,
  slot: "accessory",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
