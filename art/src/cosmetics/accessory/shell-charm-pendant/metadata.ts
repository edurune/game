import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "shell-charm-pendant",
  name: msg`Shell pendant`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
