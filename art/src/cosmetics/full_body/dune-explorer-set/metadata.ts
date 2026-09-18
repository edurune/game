import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "dune-explorer-set",
  name: msg`Dune explorer`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
