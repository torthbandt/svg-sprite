# SVG Sprite

Simple Grunt setup for generating optimised SVG sprites.


## Usage

1. Install dependencies: `npm install`.
2. Add SVGs to the `src` directory.
3. Run `grunt`.

Reference an SVG using the following (where `name` is the filename of an individual SVG):

```html
<svg role="presentation">
    <use xlink:href="sprite.svg#name"></use>
</svg>
```
