/** Standalone background illustrations, separate from playable battle scenes. */
export const backgroundIds = [
  "mode-banner",
  "versus",
  "versus-faceoff",
  "infinite-dungeon",
  "infinite-dungeon-entry",
] as const;
export type BackgroundId = (typeof backgroundIds)[number];
