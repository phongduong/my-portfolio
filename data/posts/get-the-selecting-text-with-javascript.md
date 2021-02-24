---
title: Get the currently selected text with Javascript
date: 2021-03-11T12:01:03.360Z
tag: javascript
---
I am looking for how to get the currently selected text. I find [`select` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event). But it only fires after text inside an `<input type="text">` or `<textarea>` is selected.

Finally, I figure out the solution for this issue. You can call `getSelection()` method of `window` after user clicks mouse.

<iframe height="265" style="width: 100%;" scrolling="no" title="Get the selected text with Javascript" src="https://codepen.io/phongduong/embed/preview/WNoXPmL?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/WNoXPmL'>Get the selected text with Javascript</a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

`getSelection()` method returns a [`Selection`](https://developer.mozilla.org/en-US/docs/Web/API/Selection) object. To get the selected text, you call its `toString()` method