---
title: onchange vs oninput
date: 2021-03-19T04:58:41.960Z
tag: javascript
---
I sometimes get confused with [`onchange`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange) and [`oninput`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput) event. So I create this tutorial to show how they are different.

`input` event fires every time you change the element's value.

`change` event fires after you commit the change of the element's `value`, when you click outside of the element or switch the focus to a different control.

<iframe height="265" style="width: 100%;" scrolling="no" title="Onchange vs oninput" src="https://codepen.io/phongduong/embed/preview/BaQJGyV?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/BaQJGyV'>Onchange vs oninput</a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>