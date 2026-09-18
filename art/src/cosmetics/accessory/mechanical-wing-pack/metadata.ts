import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "mechanical-wing-pack",
  name: msg`Mechanical wings`,
  slot: "accessory",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
