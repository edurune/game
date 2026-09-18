import type { MotionDefinition, ClipName, MotionSnapshot } from "./motion/types.ts";
import type { EffectClip, EffectSelection } from "./effects/types.ts";
import type { MessageDescriptor } from "@lingui/core";

export interface ItemMetadata {
  id: string;
  name?: MessageDescriptor;
  title?: MessageDescriptor;
  description?: MessageDescriptor;
}

export type CosmeticSlot =
  | "top"
  | "bottom"
  | "shoes"
  | "hat"
  | "accessory"
  | "full_body"
  | "pet"
  | "background";
export interface CosmeticMetadata extends ItemMetadata {
  slot: CosmeticSlot;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
}
export interface EquipmentMetadata extends ItemMetadata {
  slot: "weapon" | "armor" | "charm";
}
export interface EnemyMetadata extends ItemMetadata {
  bounds: readonly [number, number, number, number];
}
export interface BrandMetadata extends ItemMetadata {
  kind: "mark" | "wordmark" | "favicon";
}
export type CombatIconMetadata = ItemMetadata &
  (
    | { category: "action" | "effect" | "stat" | "resource" | "targeting"; value: string }
    | { category: "status"; stat: string; direction: "up" | "down" }
  );

export type { MotionDefinition, ClipName, MotionSnapshot, EffectSelection };
export type Rect = readonly [number, number, number, number];
export type Point = readonly [number, number];
export type Palette = { skin?: string; hair?: string; eyes?: string };
export interface ArtRig {
  id: string;
  viewBox: Rect;
  safeBounds: Rect;
  baseline: number;
  outline: string;
  strokeWidth: number;
  strokeLinecap: "round";
  strokeLinejoin: "round";
  materialPalette: Record<string, string>;
  fitRegions: Record<string, Rect>;
  coverageChecks: readonly {
    id: string;
    slots: readonly string[];
    basePlane: string;
    region: Rect;
  }[];
  palette: Palette;
  anchors: Record<string, Point>;
  planes: readonly { id: string; anchor: string; slots: readonly string[] }[];
  poses: Record<string, Record<string, number>>;
  darkOutline?: string;
  reviewSizes?: readonly number[];
}
export interface EffectRig extends ArtRig {
  scaleByKind: Record<string, number>;
  playerAnchors: Record<string, Point>;
  enemyHeadClearance: number;
}
export interface ArtItem {
  id: string;
  slot: string;
  defs: string;
  parts: { plane: string; anchor: string; markup: string; fit?: string | null }[];
  bounds?: Rect;
  motion?: MotionDefinition;
  clip?: EffectClip;
  kind?: string;
}
export interface EnemyArt extends ArtItem {
  motion: MotionDefinition;
  bounds: Rect;
}
export interface EffectArt extends ArtItem {
  clip: EffectClip;
  kind: string;
}
export interface BattleFrame {
  enemy: { baseline: number; hoverClearance: number };
  scene: { viewBox: Rect };
  cameraPadding: number;
  layouts: Record<
    "wide" | "compact",
    {
      viewBox: Rect;
      world: Rect;
      sceneCrop: Rect;
      player: { x: number; y: number };
      enemies: readonly { x: number; y: number }[];
    }
  >;
}
export interface ComposeOptions {
  pose?: string;
  palette?: Palette;
  instance?: string;
  mirror?: boolean;
  motion?: MotionSnapshot;
  explode?: boolean;
  hidden?: string[];
}
export interface WardrobeArt {
  rig: ArtRig;
  items: ArtItem[];
  bounds?: Record<string, Record<string, Rect>>;
}
export interface BattleArt {
  frame: BattleFrame;
  enemyRig: ArtRig;
  sceneRig: ArtRig;
  effectRig: EffectRig;
  enemies: EnemyArt[];
  regions: ArtItem[];
  effects: EffectArt[];
  playerMotion: MotionDefinition;
}
export interface BattleOptions {
  sceneId: string;
  enemyIds: string[];
  selectedIds: string[];
  instance?: string;
  palette?: Palette;
  layout?: "wide" | "compact";
  guides?: boolean;
  foreground?: boolean;
  motion?: { clip: ClipName; time: number };
  actorMotions?: Record<string, { clip: ClipName; time: number }>;
  effect?: EffectSelection;
}
export interface BattleActor {
  key: string;
  owner: string;
  definition: MotionDefinition;
  rig: ArtRig;
  items: ArtItem[];
  selected: string[];
  position: { x: number; y: number };
  bounds: Rect;
  baseline: number;
}
