import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-guinea-pig",
  name: msg`Chubby guinea pig`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
