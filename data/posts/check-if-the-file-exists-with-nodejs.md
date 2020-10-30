---
title: Check if a file exists with Nodejs
date: 2020-11-11T13:49:42.145Z
tag: nodejs
---
If you need to check if a file exists without opening or modifying with Nodejs, you use `fs.access()` method.

```javascript
const fs = require("fs")

fs.access("file.txt", (err) => { 
    console.log(err ? 'not exist' : 'exist');
  }
)
```

The callback's argument is an `Error` object if the check fails.