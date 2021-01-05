---
title: Normalize path with Node
date: 2021-01-06T07:23:41.521Z
tag: nodejs
---
Normalize path means that the `..` and `.` segments are resolved and path segment separation characters like `/` and `\` are replaced by the platform-specific path segment separator.

To normalize the path with Node, you use the `normalize()` method of the `path` module.