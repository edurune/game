import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "mushroom-bell-cap",
  name: msg`Mushroom cap`,
  slot: "hat",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
