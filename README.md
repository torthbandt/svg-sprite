# SVG Sprite

Simple Grunt setup for generating optimized SVG sprites.


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
### Steps
1. Go to SVG-Sprite folder /dev/svg-sprite
2. Create a 'src' folder
3. Run 'grunt' at /dev/svg-sprite to compile
4. copy SVG images and paste to /svg-sprite/src
5. In /svg-sprite there should be a new folder called /build
6. In /build folder, copy the sprite.svg file to the new location where you need your svg sprite located
7. In terminal, add new sprite.svg and any new svg file(s) to your local branch