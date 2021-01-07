---
title: Get operating system's default directory for temporary files with Node
date: 2021-01-08T07:30:36.825Z
tag: nodejs
---
Temporary files are useful when you create files but don't want to save them permanently. You may just use them to save the data of your application's session. 

To know where the temporary files are saved in the operating system with Node, you can use the `tmpdir()` method of the `os` module. 

```javascript
os.tmpdir();
// C:\\Users\\phong\\AppData\\Local\\Temp
```

It doesn't accept any parameters and returns the operating system's default directory for temporary files as a string.