import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cloud-puff-pants",
  name: msg`Cloud puff pants`,
  slot: "bottom",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
