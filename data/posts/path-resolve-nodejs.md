---
title: Resolve path with Node
date: 2021-01-11T07:21:37.597Z
tag: nodejs
---
A resolved path is an absolute path. To resolve a path with Node, you use `resolve()` method of the `path` module.

```javascript
const path = require("path")
```

It receives a sequence of paths. The sequence is processed from right to left. The subsequent `path` is prepended until an absolute path is constructed. 

```javascript
path.resolve("/path1", "/path2", "path3")
// C:\\path2\\path3
```

The order of the subsequent paths above is `"path3"`, `"/path2"` and `"/path1"`. The method returns `C:\path2\path3` and doesn't include `"/path1"` because `"/path2" + "/" + "path3"` is an absolute path. 

If you use `'..'` and `'.'` segments in the paths, they will be resolved.

```javascript
path.resolve("/path1", "path2", "../path3")
// C:\\path1\\path3
```

The resulting path is normalized and trailing slashes are removed. 

```javascript
path.resolve("/path1", "path2\\")
// C:\\path1\\path2
```

If there isn't any absolute path generated, the absolute path of the current working directory will be used 

```javascript
path.resolve("path1", "path2")
// C:\\Users\\phong\\path1\\path2
```

If no `path` is passed, `resolve()` will return the absolute path of the current working directory.

```javascript
path.resolve()
// C:\\Users\\phong
```