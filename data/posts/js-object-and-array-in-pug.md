---
title: JS object and array in Pug
description: Learn how to define and use JS array and object in Pug
date: 2020-07-17T15:06:56.328Z
tag: pug
---
To define a single line JS object or array, you initialize them as a normal JS line after the dash (`-`). In case you want to define a multiple line object, you need to put your variable under the dash and indent 1 tab.

```javascript
// Single line array
- const arr = [1, 2, 3, 4, 5]

// Multiple line object
-
  const obj = {
     value: "1",
     type: "string"
  }
```