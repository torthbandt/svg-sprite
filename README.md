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

### Steps
1. Go to SVG-Sprite folder /dev/svg-sprite
2. Create a 'src' folder
3. Run 'grunt' at /dev/svg-sprite to compile
4. copy SVG images from /marketingsite/project/xero.marketing.cms/images/features/icons -> paste to /svg-sprite/src
5. Add the new SVG image to the /svg-sprite/src folder
6. In /svg-sprite there should be a new folder called /build
7. In terminal, add new icons.svg and new svg file to your local branch
