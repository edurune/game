import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "clover-meadow",
  name: msg`Clover meadow`,
  slot: "background",
  rarity: "common",
} as const satisfies CosmeticMetadata;
