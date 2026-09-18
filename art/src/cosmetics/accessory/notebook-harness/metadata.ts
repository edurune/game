import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "notebook-harness",
  name: msg`Notebook harness`,
  slot: "accessory",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
