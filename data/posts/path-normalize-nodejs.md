---
title: Normalize path with Node
date: 2021-01-06T07:23:41.521Z
tag: nodejs
---
Normalize path means that the `'..'` and `'.'` segments are resolved and path segment separation characters like `/` and `\` are replaced with the platform-specific path segment separator.

To normalize the path with Node, you call the `normalize()` method of the `path` module.

```javascript
 const path = require("path")
```

It receives a path as a parameter

```javascript
path.normalize("path1/path2\\../path3")
// path1\\path3
```

The path above is resolved at `'..'` segment. It goes up from `path2` to `path1` and continues with `path3`. I am using Windows so that the path segment separator is replaced with `\\`. 

If there are multiple separators, they will be replaced with a single separator.

```javascript
path.normalize("path1/path2////path3")
// path1\\path2\\path3
```

In case you combine `/` and `\` in the path, they are still replaced with a platform-specific separator.

```javascript
path.normalize("path1\\path2//\\path3")
// path1\\path2\\path3
```

The method preserves the trailing separators.

```javascript
path.normalize("path1/path2/")
// path1\\path2\\
```

If you pass a zero-length string, the method return `'.'`, which is the current directory.

```javascript
path.normalize("")
// '.'
```