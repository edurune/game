import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-status-attack-up",
  category: "status",
  stat: "attack",
  direction: "up",
} as const satisfies CombatIconMetadata;
