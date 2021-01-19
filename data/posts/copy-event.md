---
title: "Copy event "
date: 2021-01-20T13:23:50.644Z
tag: javascript
---
Copy event fires when you copy the selection to the clipboard.

The event handler can modify the copied content by using `setData` on the event's  `ClipboardEvent.clipboardData` property. You can also cancel the event using `event.preventDefault()`. 

## Example

In this example, you will reverse the words in the `paragraph` when the user copies the text and past it to the `textarea`. You are going to create two elements: a `paragraph` and a `textarea`.

```pug
p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor magna. Curabitur mauris eros, scelerisque eleifend odio in, luctus mattis lorem.
textarea(cols="30", rows="10")
```

You listen to the `copy` event

```javascript
document.addEventListener("copy", (event) => {
});
```

You retrieve the selected text from `getSelection()` method of the `document`.

```javascript
document.addEventListener("copy", (event) => {
  const selection = document.getSelection();
});
```

The method returns a `Selection` object. It contains all information about the selection. To get the selected text, you call the `toString()` method.

```javascript
const selection = document.getSelection().toString();
```

You now have the selected text. You reverse the words of the selected text by using array methods

```javascript
const reversedSelection = selection.split(" ").reverse().join(" ");
```

<iframe height="265" style="width: 100%;" scrolling="no" title="Copy event " src="https://codepen.io/phongduong/embed/preview/gOwqNdw?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/gOwqNdw'>Copy event </a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>