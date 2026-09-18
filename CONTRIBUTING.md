# Contributing

## Artwork provenance

Submit only artwork you have the right to license under this repository's terms. State its provenance in the pull request description.

## Before opening a pull request

Inspect your asset in the art room, then run the checks:

```sh
bun run art:dev
bun run typecheck && bun run lint && bun run fmt
```

If you changed shared names, titles, or descriptions:

```sh
bun run i18n:extract
bun run i18n:compile
```

Commit the `.po` and compiled `.ts` files.

Follow [DESIGN.md](DESIGN.md). The reserved media files in [art/src/brand/](art/src/brand/) are closed to contributions.

## Publishing `@edurune/art`

Update the version in `art/package.json`, merge that change, then publish a GitHub release from the matching commit. The `Publish @edurune/art` workflow typechecks and publishes the package to GitHub Packages. It can also be started manually from the Actions tab.

Published versions are immutable, so each run needs a version that does not already exist in GitHub Packages.
