# @edurune/art

SVG artwork, music, metadata, translations, and React renderers for EduRune. The package ships TypeScript source.

## Usage

Use Vite with `vite-plugin-svgr`. Exclude this package from dependency prebundling and apply your app's Lingui macro transform to its source.

```tsx
import { CharacterPortrait, RegionScene } from "@edurune/art";
import { terrainUrls, encounterMusicUrls } from "@edurune/art/assets";
import { defaultOutfit } from "@edurune/art/catalog";

<CharacterPortrait
  cosmeticIds={Object.values(defaultOutfit).filter((id) => id !== null)}
  hairStyle="soft-crop"
  palette={{ hair: "#594239" }}
  label="Your character"
  style={{ width: 240 }}
/>;
<RegionScene regionId="forest-clearing" style={{ width: "100%" }} />;
<img src={terrainUrls["forest-clearing"]} alt="" />;
<audio src={encounterMusicUrls["forest-clearing"].normal} preload="none" loop />;
```

Components accept standard div attributes, inline styles, and an optional accessible `label`. Portraits and battles take motion props, pause when hidden or offscreen, and respect reduced motion.

## Exports

| Import                           | Contents                                                                                           |
| -------------------------------- | -------------------------------------------------------------------------------------------------- |
| `@edurune/art`                   | React components, their props, and battle layout and timing helpers                                |
| `@edurune/art/assets`            | Typed URL maps for cosmetics, hair, enemies, equipment, icons, effects, scenes, terrain, and music |
| `@edurune/art/catalog`           | Metadata collections, default outfit, and derived ID unions                                        |
| `@edurune/art/labels`            | Shared display vocabulary                                                                          |
| `@edurune/art/locales/en`, `/vi` | Compiled translation catalogs                                                                      |
| `@edurune/art/preload`           | Bun preload that transforms Lingui macros in package metadata                                      |
| `@edurune/art/rendering`         | Composition, parsing, motion, and frame contracts                                                  |

Follow the repository's [art style rules](https://github.com/edurune/game/blob/main/DESIGN.md) when working on artwork.

## Licensing

Copyright © 2026 Setten Company Limited. This package uses file-based licensing:

- All files except the media files described below are licensed under the [Apache License 2.0](LICENSE).
- `.svg`, `.mp3`, `.png`, and `.ico` files are licensed under [CC BY-NC-SA 4.0](LICENSE-CC-BY-NC-SA-4.0).
- Exception: no license is granted for the `.svg`, `.png`, and `.ico` files in [src/brand/](src/brand/); all rights are reserved. TypeScript and other non-media files there remain under Apache-2.0.

No trademark rights in the EduRune name or marks are granted.
