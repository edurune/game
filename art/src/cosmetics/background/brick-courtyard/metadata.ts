import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "brick-courtyard",
  name: msg`Brick courtyard`,
  slot: "background",
  rarity: "common",
} as const satisfies CosmeticMetadata;
