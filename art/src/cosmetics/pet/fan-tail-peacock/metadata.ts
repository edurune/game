import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "fan-tail-peacock",
  name: msg`Fan-tail peacock`,
  slot: "pet",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
