---
title: Run tasks simultaneously in Gulpjs
date: 2020-09-30T12:36:54.605Z
tag: gulpjs
---

To run your tasks simultaneously, you pass your private tasks to the `parallel` function. You can pass them as an array or just arguments. The order of tasks is not important.

You export the `parallel` function as a public task and run it normally

```javascript
const { src, dest, parallel } = require("gulp");

const copyCSS = () => {
  return src("src/**/*.css").pipe(dest("dist/style"));
};

const copyPNG = () => {
  return src("src/**/*.png").pipe(dest("dist/imag"));
};

exports.default = parallel(copyCSS, copyPNG);
// Or
// exports.default = parallel([copyCSS, copyPNG]);
```
