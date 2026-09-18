import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-status-speed-down",
  category: "status",
  stat: "speed",
  direction: "down",
} as const satisfies CombatIconMetadata;
