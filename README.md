# Tree-shaking DEMO 🌳

> This project demonstrates how to do tree-shaking (removal of unused exports) with webpack 2 and Babel 6.

## Installation

```
npm install
```

## Build with tree-shaking

```
npm run build
```

Expected result:
```
Hash: 32ec9cab4e05ddc0c76f
Version: webpack 2.3.2
Time: 559ms
    Asset       Size  Chunks             Chunk Names
bundle.js  879 bytes       0  [emitted]  main
```
Check `dist/bundle.js`, it won't include the unused `helloWorld()` method.


## Build without tree-shaking

Please remove the `{ "modules": false }` option in `.babelrc`, Babel will transpile `import` and `export` statements into CommonJS syntax.

Run the build script again, here is the result we expected
```
Hash: 4b5636fdf491794e6a75
Version: webpack 2.3.2
Time: 687ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.23 kB       0  [emitted]  main
```
You can find `console.log("Hello World!")` inside the bundle... 😕


## Import node_modules library

Please uncomment the following scripts in `index.js`.
```js
import { rounding } from './math';

console.log(rounding(4.006, 2));
```

In `math.js`, `sum` and `round` methods are imported from 'lodash-es' main entry.
```js
import { sum, round } from 'lodash-es';
```

Even with or without tree-shaking, webpack will include whole lodash library into bundle... 😕

Here is the reference result:
```
Hash: 581070f8cdc5e362b2bb
Version: webpack 2.3.2
Time: 4631ms
    Asset    Size  Chunks             Chunk Names
bundle.js  136 kB       0  [emitted]  main
```

Let we track the codes now, please remove the `-p` flag in npm `build` script and rebuild the bundle in unminified mode.

In line 25509,
```
/* 623 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunk_js__ = __webpack_require__(197);
/* unused harmony reexport chunk */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compact_js__ = __webpack_require__(203);
/* unused harmony reexport compact */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__concat_js__ = __webpack_require__(204);
...
```
we can find the unused lodash methods are marked as `unused harmony` by Webpack, but UglifyJS does not drop them in minification process. (Please check [webpack/webpack#2867](https://github.com/webpack/webpack/issues/2867) issue for more details)


## code splitting - `import()`

Checkout `code_splitting` branch and run `npm install`.

This is a demo of [webpack's code-splitting guide](https://webpack.js.org/guides/code-splitting-import/). Check the link for more details.
