# Art style

- Follow the frame contracts in [art/src/frame/](art/src/frame/).

## Line and colour

- Use broad, flat fills with at most one shadow tone per material.

## Frames

- Scale artwork uniformly.
- Place identifying scene props at the sides, leaving the centre clear for characters.
- Match terrain tiles at the top and bottom edges.
- Do not add rounded corners or outer borders to cosmetic backgrounds.

## Fitting

- Fit garments to the neutral body without changing it.
- Extend covered joints beneath adjacent pieces.
- Draw each visible contour once.
- Preserve the culturally correct direction of garment closures.

## Motion

- Match the first and last idle poses.
- Animate shaded surfaces with their contours.
- Animate clothing with its anchors.

## Asset files

- Keep all parts of one garment together.
- Keep rarity borders, labels, and thumbnail scaling out of artwork.
- Do not generate artwork with scripts.

## Review

- Run `bun run art:dev` to inspect changes before opening a pull request.
- Check seams, outlines, layering, and readability at 64px.
- Check motion endpoints, both battle layouts, and effect placement.
