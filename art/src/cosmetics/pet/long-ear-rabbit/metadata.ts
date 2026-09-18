import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "long-ear-rabbit",
  name: msg`Long-ear rabbit`,
  slot: "pet",
  rarity: "common",
} as const satisfies CosmeticMetadata;
