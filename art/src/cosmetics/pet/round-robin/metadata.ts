import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "round-robin",
  name: msg`Plump robin`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
