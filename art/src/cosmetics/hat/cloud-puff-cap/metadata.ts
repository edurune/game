import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cloud-puff-cap",
  name: msg`Cloud puff cap`,
  slot: "hat",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
