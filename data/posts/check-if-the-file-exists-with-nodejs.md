---
title: Check if the file exists with Nodejs
date: 2020-11-11T13:49:42.145Z
tag: nodejs
---
```javascript
const fs = require("fs")

fs.access("file.txt", (err) => { 
    console.log(err ? 'not exist' : 'exist');
  }
)
```