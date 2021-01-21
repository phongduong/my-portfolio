---
title: Get the size of the file with Node.js
date: 2021-01-27T15:08:05.693Z
tag: nodejs
---
`fs.stat()` method returns the information about a file. It receives 2 parameters: the path to the file and a callback.

The callback receives the `error` and `stats` object. This object includes the `size` of the file. 

```javascript
fs.stat("./package.json", (err, stats) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(stats.size) // 499
})
```

`size` property returns the size of the file in bytes. In this case, my `package.json` file's size is `499` bytes.