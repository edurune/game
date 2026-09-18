# EduRune Game

Game assets, data files, and tools for the EduRune game.

- [art](art/) (`@edurune/art`): artwork, music, typed metadata, translations, and React renderers.
- [artroom](artroom/): a Vite app for inspecting assets.

```sh
bun install
bun run art:dev
bun run art:build
bun run typecheck
bun run lint
bun run fmt
```

Inspect artwork, animation, battle layouts, music, and branding at `http://127.0.0.1:4317`.

See [DESIGN.md](DESIGN.md) for art style rules and [art/README.md](art/README.md) for package usage.

## Translation

Write optional `name`, `title`, and `description` fields with Lingui `msg` tagged templates in `metadata.ts`. Shared vocabulary lives in `labels.ts`.

```sh
bun run i18n:extract
# Translate the Vietnamese catalog before compiling.
bun run i18n:compile
```

## Licensing

Copyright © 2026 Setten Company Limited. This repository uses file-based licensing:

- All files except the media files described below are licensed under the [Apache License 2.0](LICENSE).
- `.svg`, `.mp3`, `.png`, and `.ico` files are licensed under [CC BY-NC-SA 4.0](LICENSE-CC-BY-NC-SA-4.0).
- Exception: no license is granted for the `.svg`, `.png`, and `.ico` files in [art/src/brand/](art/src/brand/); all rights are reserved. TypeScript and other non-media files there remain under Apache-2.0.

No trademark rights in the EduRune name or marks are granted.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
