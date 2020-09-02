---
title: Minify CSS code with gulp-clean-css plugin
description: Create a simple task to minify CSS code with gulp-clean-css plugin
  and reduce your application's size
date: 2020-09-21T12:28:06.736Z
tag: gulpjs
---
When you build your code for production, you need to minify CSS to reduce your application's size. Gulpjs has various plugins to do that. I will show you how to use gulp-clean-css plugin to minify CSS code

You install gulp-clean-css plugin as devDependencies

```
npm install --save-dev gulp-clean-css
```

In the `gulpfile.js`, you import gulp, gulp-clean-css and create a task.   

```javascript
const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");

const minifyCSS = () => {
  return src("src/styles/*.css").pipe(cleanCSS()).pipe(dest("dist/styles"));
};

exports.default = minifyCSS
```

My task will minify all css file in `src/styles` directory and write them to `dist/styles` directory. In the `src` function, you can replace the asterisk with your file's name

Run gulp command

```
gulp
```

After the command finishes, you will see your minified CSS files in the `dist/styles` directory