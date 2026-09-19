![EduRune](https://raw.githubusercontent.com/edurune/game/refs/heads/main/art/exports/social-card-1200x630.png)

EduRune is a learning game with courses, lesson maps, and turn-based battles. Learners answer questions to fight enemies and earn XP, coins, gear, and cosmetics.

## Development

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

Help translating by updating [.po files](./art/src/locales).

```sh
bun run i18n:extract
bun run i18n:compile
```

## Licensing

This repository uses file-based licensing:

- All files except the media files described below are licensed under the [Apache License 2.0](LICENSE).
- `.svg`, `.mp3`, `.png`, and `.ico` files are licensed under [CC BY-NC-SA 4.0](LICENSE-CC-BY-NC-SA-4.0).
- Exception: no license is granted for the `.svg`, `.png`, and `.ico` files in [art/src/brand/](art/src/brand/); all rights are reserved. TypeScript and other non-media files there remain under Apache-2.0.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
