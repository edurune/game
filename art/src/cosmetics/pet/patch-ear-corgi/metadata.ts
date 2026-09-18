import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "patch-ear-corgi",
  name: msg`Patch-ear corgi`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
