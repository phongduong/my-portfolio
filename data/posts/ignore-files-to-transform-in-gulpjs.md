---
title: Ignore files to transform in Gulpjs
date: 2020-09-29T07:37:59.554Z
tag: gulpjs
---

When you need to transform a group of files inside of multiple directory, you may want some files not to be transformed. You can do this with negative globs in the `src` function.

We will create a task to copy all CSS files in our project to the output directory. But we don't want CSS files in `node_modules` and output directory to be proceeded

```javascript
const { src, dest } = require("gulp");

const copyCSS = () => {
  return src(["./**/*.css", "!{node_modules,dist}/**"]).pipe(dest("dist"));
};

exports.default = copyCSS;
```

I passed an array of globs to the `src` function. The first glob will find all CSS files. The second glob will exclude a portion of the matched files in `node_modules` and `dist` directory
