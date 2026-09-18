import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "canvas-five-panel",
  name: msg`Canvas cap`,
  slot: "hat",
  rarity: "common",
} as const satisfies CosmeticMetadata;
