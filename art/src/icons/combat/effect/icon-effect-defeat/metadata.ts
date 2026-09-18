import { msg } from "@lingui/core/macro";
import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-effect-defeat",
  category: "effect",
  value: "defeat",
  name: msg`Defeated`,
} as const satisfies CombatIconMetadata;
