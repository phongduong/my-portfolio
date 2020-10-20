---
title: Set global data directory in Eleventy
date: 2020-10-06T07:25:42.389Z
tag: eleventy
---

You can only set global data directory by configure file. Your directory must be inside of the `input` directory

```javascript
// .eleventy.js
module.exports = {
  dir: {
    input: "docs",
    data: "data",
  },
};
```

This mean the `data` directory is inside of the `docs` directory.
