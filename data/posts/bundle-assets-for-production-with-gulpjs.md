---
title: Run multiple public tasks in Gulpjs command
description: You can run multiple tasks in a single gulp command
date: 2020-10-05T12:57:34.907Z
tag: gulpjs
---
When you create and export tasks to run in `gulp` command, you can execute them in a single command

```javascript
const { src, dest } = require("gulp");

const copyCSS = () => {
  return src("src/**/*.css").pipe(dest("dist"));
};

const copyPNG = () => {
  return src("src/**/*.png").pipe(dest("dist"));
};

exports.default = copyCSS;
exports.copyPNG = copyPNG

```

You run `gulp` command and pass the export names as argument. The `default` task is a special case. If you run only `default` task, you don't have to pass `default` to command. 

```
gulp
```

If you run `default` with other tasks, you must pass it

```
gulp default copyPNG
```