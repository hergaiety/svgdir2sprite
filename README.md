# svgdir2sprite

Creates a spritesheet from a directory of svgs. Can return the results directly or write to a spritesheet svg file. Node based and powered by [svg2sprite](https://github.com/mrmlnc/svg2sprite).

## As a Module

`npm install --save svgdir2sprite`

### Return SVG Spritesheet as String

``` javascript
const svgdir2sprite = require('svgdir2sprite');

svgdir2sprite('./src/svgs') // Async Promise
.then((svgContent) => console.log(svgContent));
```

### Write SVG Spritesheet to File

``` javascript
const svgdir2sprite = require('svgdir2sprite');

svgdir2sprite('./src/svgs', './build/spritesheet.svg');
```

## From the CLI

`npm install -g blabber-comic`

### Return SVG Spritesheet to the Console

``` bash
svgdir2sprite ./src/svgs
```

### Write SVG Spritesheet to File

``` bash
svgdir2sprite ./src/svgs ./build/spritesheet.svg
```
