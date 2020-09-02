---
title: Minify CSS code with gulp-clean-css plugin
description: Create a simple task to minify CSS code with gulp-clean-css plugin
date: 2020-09-21T12:28:06.736Z
tag: gulpjs
---
When you build your code for production, you need to minify CSS to save your app's size. Gulpjs has various plugins to do that. I will show you how to use gulp-clean-css plugin to minify CSS

You install gulp-clean-css plugin as devDependencies

```
npm install --save-dev gulp-clean-css
```

In the `gulpfile.js`, you import gulp, gulp-clean-css and create a task.   

```
const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");

const minifyCSS = () => {
  return src("src/styles/*.css").pipe(cleanCSS()).pipe(dest("dist/styles"));
};

exports.default = minifyCSS
```

In the `src` function, you can select replace asterisk with you file name

Run gulp command

```
gulp
```

After the command finishes, you will see your minified CSS files in the `dist/styles` directory