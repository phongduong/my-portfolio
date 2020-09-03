---
title: Copy files to a new folder with Gulpjs
description: You can copy your files from a directory to another directory with
  Gulpjs easily
date: 2020-09-28T07:30:52.891Z
tag: gulpjs
---
Gulpjs provides functions that you can use to copy files from `src` to `dist` directory for production. We will create a task to copy all PNG images to the output directory.

```javascript
const { src, dest } = require("gulp");

const copyPNG = () => {
  return src("src/image/*.png")
    .pipe(dest("dist/image"));
};

exports.default = copyPNG;
```

Run `gulp` command

```
gulp
```

You can see your PNG images is in the `dist/image` directory now