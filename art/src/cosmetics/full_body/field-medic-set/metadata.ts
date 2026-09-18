import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "field-medic-set",
  name: msg`Field medic`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
