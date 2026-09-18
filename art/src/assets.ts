import type { CosmeticId } from "./cosmetics/index.ts";
import type { EquipmentId } from "./equipments/index.ts";
import type { HairstyleId } from "./characters/hair/index.ts";
import type { EnemyId } from "./enemies/index.ts";
import type { RegionId } from "./regions/index.ts";
import type { SceneId } from "./scenes/index.ts";
import type { EffectId } from "./effects/index.ts";
import type { CombatIconId } from "./icons/combat/index.ts";
import type { BrandId } from "./brand/index.ts";
import type { BackgroundId } from "./backgrounds/index.ts";

export type VictoryMusicId = "active" | "a" | "b" | "c";
export type InterfaceMusicId = "menu" | "shop" | "challenges" | "versus";

const byId = <Id extends string>(
  files: Record<string, string>,
  source: "directory" | "filename" = "directory",
): Readonly<Record<Id, string>> =>
  Object.fromEntries(
    Object.entries(files).map(([path, url]) => {
      const name = path.split("/").at(source === "directory" ? -2 : -1)!;
      return [source === "filename" ? name.replace(/\.[^.]+$/, "") : name, url];
    }),
  ) as Record<Id, string>;

const encounterMusic = import.meta.glob<string>("./regions/*/music-*.mp3", {
  eager: true,
  query: "?url&no-inline",
  import: "default",
});

export const encounterMusicUrls: Readonly<
  Record<RegionId, Readonly<{ normal: string; boss: string }>>
> = Object.freeze(
  Object.fromEntries(
    Object.entries(encounterMusic).reduce<Map<string, { normal?: string; boss?: string }>>(
      (tracks, [path, url]) => {
        const id = path.split("/").at(-2)!;
        const variant = path.endsWith("music-boss.mp3") ? "boss" : "normal";
        const pair = tracks.get(id) ?? {};
        pair[variant] = url;
        tracks.set(id, pair);
        return tracks;
      },
      new Map(),
    ),
  ) as Record<RegionId, { normal: string; boss: string }>,
);

const victoryMusic = import.meta.glob<string>("./music/victory/*.mp3", {
  eager: true,
  query: "?url&no-inline",
  import: "default",
});

export const victoryMusicUrls: Readonly<Record<VictoryMusicId, string>> = Object.freeze(
  byId<VictoryMusicId>(victoryMusic, "filename"),
);
export const victoryMusicUrl = victoryMusicUrls.active!;

const interfaceMusic = import.meta.glob<string>("./music/interface/*.mp3", {
  eager: true,
  query: "?url&no-inline",
  import: "default",
});

export const interfaceMusicUrls: Readonly<Record<InterfaceMusicId, string>> = Object.freeze(
  byId<InterfaceMusicId>(interfaceMusic, "filename"),
);

export const cosmeticUrls = byId<CosmeticId>(
  import.meta.glob("./cosmetics/*/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const hairUrls = byId<HairstyleId>(
  import.meta.glob("./characters/hair/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const enemyUrls = byId<EnemyId>(
  import.meta.glob("./enemies/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const regionSceneUrls = byId<RegionId>(
  import.meta.glob("./regions/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const sceneUrls = byId<SceneId>(
  import.meta.glob("./scenes/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const backgroundUrls = byId<BackgroundId>(
  import.meta.glob("./backgrounds/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const terrainUrls = byId<RegionId>(
  import.meta.glob("./regions/*/terrain.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const effectUrls = byId<EffectId>(
  import.meta.glob("./effects/*/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const equipmentUrls = byId<EquipmentId>(
  import.meta.glob("./equipments/*/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export const iconUrls = byId<CombatIconId>(
  import.meta.glob("./icons/combat/*/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
export { default as bodyUrl } from "./frame/body.svg?url&no-inline";
export const brandUrls = byId<BrandId>(
  import.meta.glob("./brand/*/art.svg", {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }),
);
