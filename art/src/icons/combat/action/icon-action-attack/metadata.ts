import { msg } from "@lingui/core/macro";
import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-action-attack",
  category: "action",
  value: "attack",
  name: msg`Attack`,
} as const satisfies CombatIconMetadata;
