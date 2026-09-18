import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "map-room",
  name: msg`Map room`,
  slot: "background",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
