---
title: Rename a file with gulp-rename
description: Sometime you need to rename your file for development and production
date: 2020-09-22T12:53:40.129Z
tag: gulpjs
---
Gulpjs has a lot of plugins that allow you to rename files. We will use gulp-rename plugin to do that. 

You install the plugin as a devDependencies

```
npm install --save-dev gulp-rename
```

After completing installation, you import the plugin and create task to a rename files

```javascript
const { src, dest } = require("gulp");
const rename = require("gulp-rename");

const renameFile = () => {
  return src("src/js/*.js")
    .pipe(rename({ basename: "test", extname: ".min.js" }))
    .pipe(dest("dist/js"));
};

exports.default = renameFile;
```

Run `gulp` command

```
gulp
```

After running the command, you will see `test.min.js` in the `dist/js` directory. You can use gulp-rename to change dirname, add prefix or suffix to the fie name