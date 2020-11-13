---
title: Get the current position of the cursor on the page
date: 2020-11-18T14:41:58.447Z
tag: javascript
---
To get the current position of the cursor on the page, you retrieve `pageX` and `pageY` property of the `MouseEvent` interface. These properties are the X and Y coordinates of the event on the document. They are in pixels and relative to the left and top edges of the document.

```javascript
document.addEventListener("mousemove", ({ pageX, pageY }) => {
   console.log(pageX, pageY)
});
```

These positions can change if you scroll the page. For example: if you scroll the page down 800px and move the cursor to 200px from the top edge of the document, `pageY` returns 1000.