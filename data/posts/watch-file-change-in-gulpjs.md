---
title: Watch file change in Gulpjs
description: Gulpjs provides watch function to help you do something when your files change
date: 2020-09-23T14:14:30.743Z
tag: gulpjs
---
You import `src`, `dest` function from `gulp` module and create a task that you want to execute when your files change. In my task, I want to copy all JS files in `src/js` directory to `dist/js` directory

```javascript
const { src, dest } = require("gulp");

const copyJS = () => {
  return src("src/js/*.js").pipe(dest("dist/js"));
};
```

Next, you import `watch` function and create a task to watch your files change. You need to export this task instead of the task you want to execute when your files change. 

```javascript
const { src, dest, watch } = require("gulp");

const copyJS = () => {
  return src("src/js/*.js").pipe(dest("dist/js"));
};

const watchJS = () => {
  watch("src/js/*.js", copyJS);
};

exports.default = watchJS;
```

It will copy all JS files to the `dist/js` directory when any JS file in `src/js` directory changes

Run `gulp` command

```
gulp
```

When the command runs, it will not exit and re-run every time your watching files change