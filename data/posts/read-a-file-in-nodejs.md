---
title: Read a file in Nodejs
date: 2021-03-18T04:57:00.751Z
tag: nodejs
---
`fs` module provides `readFile` method that allows you to read the file's content.

```javascript
const fs = require("fs")

fs.readFile("path/to/file", (error, data) => {
  if (error) {
    return console.log(error);
  }
  
  console.log(data);
})
```

The callback receives 2 arguments: `error` and `data`. `error` will be `null` and data will contain the file's content if there is no error. Else, `error` contains the error message.