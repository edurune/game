import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "woolly-lamb",
  name: msg`Woolly lamb`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
