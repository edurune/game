import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "meadow-pinafore",
  name: msg`Meadow pinafore`,
  slot: "full_body",
  rarity: "common",
} as const satisfies CosmeticMetadata;
