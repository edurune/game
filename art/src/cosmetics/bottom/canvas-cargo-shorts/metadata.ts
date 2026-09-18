import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "canvas-cargo-shorts",
  name: msg`Canvas cargo shorts`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
