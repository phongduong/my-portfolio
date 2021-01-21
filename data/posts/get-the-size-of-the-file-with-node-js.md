---
title: Get the size of the file with Node.js
date: 2021-01-27T15:08:05.693Z
tag: nodejs
---
`fs.stat()` method returns the information about a file. This includes the `size` of the file.

```javascript
fs.stat("./package.json", (err, stats) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(stats.size)
})

```

`size` property returns the size of the file in bytes.