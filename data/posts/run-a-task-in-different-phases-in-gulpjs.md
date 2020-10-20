---
title: Run a task in different phases in Gulpjs
date: 2020-09-24T03:35:50.958Z
tag: gulpjs
---

When you use `dest()` function in the middle of your pipeline chain, the current location is updated to the path that you passed to the function. All actions you do below the `dest()` function will be executed at the new location. This means that after you write files to a destination, you can continue transforming and bundling those files at that destination.

## For example:

Let's create a task that copies a CSS file to a new destination, minifies and renames that file then

```javascript
const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const bundleCSS = () => {
  return src("src/style.css")
    .pipe(dest("dist"))
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("dist"));
};

exports.default = bundleCSS;
```

After you execute this task, you will see 2 new files in `dist` directory: `style.css` and `style.min.css`. After `dest()` function, it writes `style.css` to the `dist` directory and update the current location to `dist/style.css`. Down to the pipeline chain, `cleanCSS` and `rename` will transform `dist/style.css`. The second `dest()` function writes the transformed file to the `dist` directory.
