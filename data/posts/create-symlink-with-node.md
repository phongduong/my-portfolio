---
title: Create a symbolic link with Node
date: 2021-01-14T13:06:55.305Z
tag: nodejs
---
To create a symbolic link (symlink) with Node, you call the `symlink()` method of the `fs` module. 

```javascript
const fs = require("fs")
```

It receives 4 parameters

```javascript
fs.symlink(target, path, type, callback)
```

* **`target`:** string, buffer, or URL. The path which the symlink will point to.
* **`path`:** string, buffer, or URL. The path where the symlink will be created.
* **`type`:** string. The type of symlink to be created. It can be set to `file`, `dir`, or `junction`. If the target does not exist, `file` will be used. This parameter is only available on Windows. On other platforms, Node.js will autodetect `target` type and use `file` or `dir`.
* **`callback`:** the function that would be called when the method is completed. It receives an `err` parameter

  * **`err`:** an error that would be thrown if the method fails.

## Example

**Create a symlink to a file** 

```javascript
const fs = require("fs")

fs.symlink("example.txt", "symlink.txt", "file", (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Success")
})
```

After the method completes, a `symlink.txt` file is created and `Success` is printed. Otherwise, you will see the error. You can check the link by running.  

```
ls -l

```

You see `symlink.txt` is pointing to `example.txt`

**Create a symlink to a directory**

```javascript
const fs = require("fs")

fs.symlink("example", "symlink", "dir", (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Success")
})
```

The `symlink` directory is created and points to the `example` directory.

> **Note:** `symlink()` could fail if you run with `dir` or `file` type on Windows. To avoid the error, you can use `junction` type when creating symlink to both file and directory.