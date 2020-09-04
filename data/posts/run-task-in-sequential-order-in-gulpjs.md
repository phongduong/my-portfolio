---
title: Run task in sequential order in Gulpjs
description: series() is a function that you can use to run tasks in sequential
  order in Gulpjs
date: 2020-10-02T05:13:16.968Z
tag: gulpjs
---
Gulpjs allows you to group your tasks into compositions and execute them as public tasks. `series()` function receives your tasks as an array or arguments. You can use `series()` function with `parallel()` function. 

When you pass your tasks to the `serires()` function, you need to notice the order they execute.

Let's create 2 tasks and pass them to the `series()` 

```javascript
const { src, dest, series } = require("gulp");

const copyCSS = () => {
  return src(["./**/*.css", "!{node_modules,dist}/**"]).pipe(dest("dist"));
};

const copyPNG = () => {
  return src("src/**/*.png").pipe(dest("dist"));
};

exports.default = series([copyCSS, copyPNG]);

```

When you run `gulp` command, you see that `copyPNG` only runs after `copyCSS` finishes. After the last task finishes, the command will exit.