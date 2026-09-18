import type { ArtItem, ArtRig, EnemyArt, EffectArt, Rect } from "./types.ts";
import type { MotionDefinition } from "./motion/types.ts";
import type { EffectClip } from "./effects/types.ts";
import defaultOutfit from "./characters/default-outfit.ts";
import { enemies as enemyMetadata } from "./enemies/index.ts";
import presentationSource from "./battle/presentation.ts";
import type { BattlePresentation } from "./battle/types.ts";
import playerMotion from "./frame/motion.ts";
import bodySource from "./frame/body.svg?raw";
import { parseAsset } from "./svg.ts";
import { rigs } from "./frame.ts";
import battleFrame from "./frame/battle.ts";

const byId = <T extends ArtItem>(files: Record<string, T>): Readonly<Record<string, T>> =>
  Object.fromEntries(Object.values(files).map((item) => [item.id, item]));
const drawings = (
  files: Record<string, string>,
  rig: ArtRig,
  slot?: string,
): Record<string, ArtItem> =>
  Object.fromEntries(
    Object.entries(files).map(([path, source]) => [
      path,
      parseAsset(
        source,
        { id: path.split("/").at(-2)!, slot: slot ?? path.split("/").at(-3)! },
        rig,
      ),
    ]),
  );
const body = parseAsset(
  bodySource,
  { id: "round-traveler-body", slot: "base" },
  rigs.character,
) as ArtItem;
const enemies = drawings(
  import.meta.glob<string>("./enemies/*/art.svg", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
  rigs.enemy,
  "enemy",
);
const enemyById = new Map<string, { id: string; bounds: Rect }>(
  enemyMetadata.map((item) => [item.id, item]),
);
const motions = import.meta.glob<MotionDefinition>("./enemies/*/motion.ts", {
  eager: true,
  import: "default",
});
const effects = drawings(
  import.meta.glob<string>("./effects/*/*/art.svg", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
  rigs.effect,
  "effect",
);
const clips = import.meta.glob<EffectClip>("./effects/*/*/clip.ts", {
  eager: true,
  import: "default",
});
const presentation: BattlePresentation = presentationSource;

export const artwork = {
  rigs,
  battleFrame,
  playerMotion,
  defaultOutfit,
  presentation,
  bodyId: body.id,
  characters: byId({
    body,
    ...drawings(
      import.meta.glob<string>("./cosmetics/*/*/art.svg", {
        eager: true,
        query: "?raw",
        import: "default",
      }),
      rigs.character,
    ),
    ...drawings(
      import.meta.glob<string>("./characters/hair/*/art.svg", {
        eager: true,
        query: "?raw",
        import: "default",
      }),
      rigs.character,
      "hair",
    ),
  }),
  enemies: byId<EnemyArt>(
    Object.fromEntries(
      Object.entries(enemies).map(([path, item]) => {
        const motion = motions[path.replace("art.svg", "motion.ts")];
        const metadata = enemyById.get(item.id);
        if (!motion || metadata?.id !== item.id || !metadata.bounds)
          throw new Error(`Missing enemy motion or bounds: ${item.id}`);
        return [path, { ...item, bounds: metadata.bounds, motion }];
      }),
    ),
  ),
  regions: byId(
    drawings(
      import.meta.glob<string>("./regions/*/art.svg", {
        eager: true,
        query: "?raw",
        import: "default",
      }),
      rigs.scene,
      "scene",
    ),
  ),
  scenes: byId(
    drawings(
      import.meta.glob<string>("./scenes/*/art.svg", {
        eager: true,
        query: "?raw",
        import: "default",
      }),
      rigs.scene,
      "scene",
    ),
  ),
  effects: byId<EffectArt>(
    Object.fromEntries(
      Object.entries(effects).map(([path, item]) => {
        const clip = clips[path.replace("art.svg", "clip.ts")];
        if (!clip) throw new Error(`Missing effect clip: ${item.id}`);
        return [path, { ...item, clip, kind: path.split("/").at(-3)! }];
      }),
    ),
  ),
  icons: byId(
    drawings(
      import.meta.glob<string>("./icons/combat/*/*/art.svg", {
        eager: true,
        query: "?raw",
        import: "default",
      }),
      rigs.icon,
      "combat-icon",
    ),
  ),
};
