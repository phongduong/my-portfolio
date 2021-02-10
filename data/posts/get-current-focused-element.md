---
title: Get currently focused element
date: 2021-02-24T05:14:02.078Z
tag: javascript
---
To get the currently focused element, you retrieve the `activeElement` property of the `document` 

```javascript
document.activeElement
```

It returns the element which currently has focus, [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)`body` or `null` if there is no focused element.

The property will return the `input` or `textarea` element if it has the text selection.