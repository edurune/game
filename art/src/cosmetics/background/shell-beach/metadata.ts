import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "shell-beach",
  name: msg`Shell beach`,
  slot: "background",
  rarity: "common",
} as const satisfies CosmeticMetadata;
