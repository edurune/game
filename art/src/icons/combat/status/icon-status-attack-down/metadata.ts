import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-status-attack-down",
  category: "status",
  stat: "attack",
  direction: "down",
} as const satisfies CombatIconMetadata;
