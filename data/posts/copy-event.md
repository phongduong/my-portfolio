---
title: "Copy event "
date: 2021-01-20T13:23:50.644Z
tag: javascript
---
Copy event fires when you copy the selection to the clipboard.

The event handler can modify the copied content by using `setData` method on the event's  `ClipboardEvent.clipboardData` property. You can also cancel the event using `event.preventDefault()`. 

## Example

You are going to create two elements: a `paragraph` and a `textarea`. You will reverse the words of the `paragraph` when the user copies the text and paste it to the `textarea`.

```pug
p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor magna. Curabitur mauris eros, scelerisque eleifend odio in, luctus mattis lorem.
textarea(cols="30", rows="10")
```

You listen to the `copy` event

```javascript
document.addEventListener("copy", (event) => {
});
```

You do all works in this event handler. 

You retrieve the selected text by calling `getSelection()` method of the `document`.

```javascript
document.addEventListener("copy", (event) => {
  const selection = document.getSelection()
});
```

The method returns a `Selection` object. It contains all information about the selection. You call `toString()` method to get the selected text

```javascript
document.addEventListener("copy", (event) => {
  const selection = document.getSelection().toString()
});
```

You reverse the words by using array methods

```javascript
const reversedSelection = selection.split(" ").reverse().join(" ");
```

You have just retrieved and reversed the selected text. You need to set the reversed selection back to the clipboard.

```javascript
document.addEventListener("copy", (event) => {
  const selection = document.getSelection().toString();
  const reversedSelection = selection.split(" ").reverse().join(" ");
  event.clipboardData.setData("text/plain", reversedSelection);
})
```

You use `setData` method of the `event`'s `clipboardData` property. It requires two parameters: data format and data. The format of our `reversedSelection` is `text/plain` 

<iframe height="265" style="width: 100%;" scrolling="no" title="Copy event " src="https://codepen.io/phongduong/embed/preview/gOwqNdw?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/gOwqNdw'>Copy event </a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>