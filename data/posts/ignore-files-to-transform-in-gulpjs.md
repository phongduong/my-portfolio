---
title: Ignore files to transform in Gulpjs
description: Prevent files from being transformed by ignoring them in src globs
date: 2020-09-03T07:37:59.554Z
tag: gulpjs
---
When you need to transform a group of files inside of multiple directory, you may want some files not to be transformed. You can do it with globs in the `src` function.

We will create a task to move all CSS files in our project to the output directory. But we don't want CSS files in `node_modules` and output directory to be proceeded

```

```