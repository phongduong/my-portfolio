---
title: Set input and output directory in Eleventy
date: 2020-10-05T06:55:59.328Z
tag: eleventy
---

There are 2 ways to set input and out directory for your project in Eleventy: configure file and command line.

Assume you want to set `src` directory as input and the output is `dist` directory

## Configure file

```javascript
// .eleventy.js
module.exports = {
  dir: {
    input: "src", // default: .
    output: "dist", // default: _site
  },
};
```

## Command line

```
npx @11ty/eleventy --input=src --output=dist
```
