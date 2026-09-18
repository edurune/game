import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "reed-pond",
  name: msg`Reed pond`,
  slot: "background",
  rarity: "common",
} as const satisfies CosmeticMetadata;
