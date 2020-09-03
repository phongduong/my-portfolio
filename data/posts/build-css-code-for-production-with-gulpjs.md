---
title: Build CSS code for production with Gulpjs
description: Building CSS code is a step in building your application for production
date: 2020-09-25T04:29:24.632Z
tag: gulpjs
---
Building CSS code includes multiple steps like compiling preprocessors, transforming CSS with PostCSS, minify to reduce size and rename file for production version. I will show you how to build pure CSS code. I don't use preprocessor or transform CSS. I only minify, rename and bundle code to the output directory.

First we need to install gulpjs and its plugins in your project

```
npm install --save-dev gulp gulp-clean-css gulp-rename 
```

In your `gulpfile.js` create a `buildCSS` function and export it the default task

```javascript
const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const buildCSS = () => {};

exports.default = buildCSS
```

You select all CSS files that you need to build for production and pipe to your output directory

```javascript
const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const buildCSS = () => {
  return src("src/style.css")
    .pipe(dest("dist"));
};

exports.default = buildCSS
```

You call `cleanCSS` function to minify CSS code and rename file's extension to `min.css`

```javascript
const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const buildCSS = () => {
  return src("src/*.css")
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("dist"));
};

exports.default = buildCSS
```

Run `gulp` command

```
gulp
```

You now see your CSS file was minified and rename to `min.css` in the output directory