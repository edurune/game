import type { EnemyId } from "@edurune/art/catalog";
import type { RegionId } from "@edurune/art/catalog";
export type SceneArtMetadata = { id: string };
export type ReviewSet = { region: RegionId; enemies: readonly EnemyId[]; boss: EnemyId };
