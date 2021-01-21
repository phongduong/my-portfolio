---
title: Copy a file with Node.js
date: 2021-01-28T07:04:27.092Z
tag: nodejs
---
To copy a file with Node.js, you run `fs.copyFile()` method.

```javascript
const fs = require("fs")

fs.copyFile("file.txt", "file_copy.txt", (err) => {
  if (err) {
    console.log(err)
    return
  }
  
  console.log("Copied successfully")
})

```

`file_copy.txt` will be overwritten if it already exists. You will see an error if `file.txt` doesn't exist.

After the program executes, a `file_copy.txt` will be created and a success message is printed