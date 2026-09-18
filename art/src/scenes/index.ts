import shop from "./shop/metadata.ts";

export const scenes = [shop] as const;

export type Scene = (typeof scenes)[number];
export type SceneId = Scene["id"];
