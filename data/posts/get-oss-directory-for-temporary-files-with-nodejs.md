---
title: Get operating system's directory for temporary files with Node
date: 2021-01-08T07:30:36.825Z
tag: nodejs
---
Temporary files are useful when you create files but don't want to save them permanently. You may just use them to save the data for the session of your application. 

To know where the temporary files are saved in the operating system, you can use the `tmpdir()` method of the `os` module. 

```javascript
console.log(require("os").tmpdir());
// C:\Users\phong\AppData\Local\Temp
```

It doesn't accept any parameters and returns the operating system's default directory for temporary files as a string.