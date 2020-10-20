---
title: Use JS variable in Pug
date: 2020-07-16T14:53:38.634Z
tag: pug
---

Pug allows you to use JS code inside the template. There are 3 types of code. In this tutorial, I will show you how to unbuffered code. When you start using unbuffered JS code, you need to put a dash `-` before the line. After that, you can use your JS code normally.

```javascript
// Single line JS code
- const a = "text"
```

Every dash represents a line of JS code. If you want to use multiple lines of JS code like array, object or if block, you have to put it under the dash and indent a tab.

```javascript
// Multiple line JS code
-
  const list = [
    "this",
    "is",
    "a",
    "array"
  ]
```

I create a video if you prefer learning by watching:

https://youtu.be/BUMBlt3VdLw
