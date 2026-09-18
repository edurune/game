import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "dune-oasis",
  name: msg`Dune oasis`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
