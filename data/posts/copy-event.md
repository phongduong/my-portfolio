---
title: "Copy event "
date: 2021-01-20T13:23:50.644Z
tag: javascript
---
Copy event fires when you copy the selection to the clipboard.

The event handler can modify the copied content by using `setData` on the event's `ClipboardEvent.clipboardData` property.

## Example

In this example, you reverse the words in the `paragraph` when the user copies the text and paste it to the `textarea`. You are going to create two elements: a `paragraph` and a `textarea`.

```pug
p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor magna. Curabitur mauris eros, scelerisque eleifend odio in, luctus mattis lorem.
textarea(cols="30", rows="10")
```

You listen to the `copy` event. You do all works in this event listener.

```javascript
document.addEventListener("copy", (event) => {
	event.preventDefault();
});
```

Because you will modify the selected text and set it back to the clipboard. You need to cancel the event's default action. Else, the event will use the original selected text. 

You retrieve the selection from `getSelection()` method of the `document`.

```javascript
document.addEventListener("copy", (event) => {
  // ...
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

You have just retrieved and reversed the selected text. You need to set it back to the clipboard

```javascript
event.clipboardData.setData("text/plain", reversedSelection);
```

You use the `setData` method on the event's `clipboardData` property. The method requires data format and the data to set to the clipboard. You use `text/plain` format for the selected text.

Here is full code of the example

<iframe height="265" style="width: 100%;" scrolling="no" title="Copy event " src="https://codepen.io/phongduong/embed/preview/gOwqNdw?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/gOwqNdw'>Copy event </a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>