---
title: Rename a file with gulp-rename plugin
description: Sometime you need to rename your file for development and production
date: 2020-09-22T12:53:40.129Z
tag: gulpjs
---
Gulpjs has a lot of plugins that allow you to rename files. I will use gulp-rename plugin to do that. 

You install the plugin as a `devDependencies`

```
npm install --save-dev gulp-rename
```

After installing, you import the plugin and create a task to a rename files

```javascript
const { src, dest } = require("gulp");
const rename = require("gulp-rename");

const renameFile = () => {
  return src("src/js/index.js")
    .pipe(rename({ basename: "test", extname: ".min.js" }))
    .pipe(dest("src/js"));
};

exports.default = renameFile;
```

In my task, I rename `index.js` file to `test.min.js` file. You need to use `pipe` method to write your newly renamed file to the destination else it won't work 

Run `gulp` command

```
gulp
```

After running the command, you will see `test.min.js` in the `src/js` directory. You can use gulp-rename to change `dirname`, add `prefix` or `suffix` to your file's name