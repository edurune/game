import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ember-dragon",
  name: msg`Ember dragon`,
  slot: "pet",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
