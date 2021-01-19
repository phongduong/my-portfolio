---
title: "Copy event "
date: 2021-01-20T13:23:50.644Z
tag: javascript
---
Copy event fires when you copy the selection to the clipboard.

The event handler can modify the copied content by using `setData(format, data)` on the event's  `ClipboardEvent.clipboardData` property. You can also cancel the event using `event.preventDefault()`. 

## Example

We have two elements: a `paragraph` and a `textarea`. We want to reverse the words in the paragraph when the user copies the text and past it to the `textarea`.

```pug
p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, ex sit amet auctor fringilla, orci magna pharetra dui, vitae tincidunt est felis et libero
textarea(rows="10", cols="30")
```

To reverse the words, we do it in the `copy` event's handler.

```javascript
document.addEventListener("copy", (event) => {
});
```

You retrieve the selected text from the `document` by calling `getSelection()` method.

```javascript
document.addEventListener("copy", (event) => {
  const selection = document.getSelection();
});
```

<iframe height="265" style="width: 100%;" scrolling="no" title="Copy event " src="https://codepen.io/phongduong/embed/preview/gOwqNdw?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/gOwqNdw'>Copy event </a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>