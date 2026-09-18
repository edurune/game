import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "drawstring-joggers",
  name: msg`Drawstring joggers`,
  slot: "bottom",
  rarity: "common",
} as const satisfies CosmeticMetadata;
