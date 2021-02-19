---
title: Reset a property in CSS
date: 2021-02-25T15:34:58.695Z
tag: css
---
To reset a property in CSS, you use the `unset` keywork for its value.

The property will be reset to its inherited value if the property naturally inherits from its parent, and to its `initial` value if not.

<iframe height="265" style="width: 100%;" scrolling="no" title="Reset a property in CSS" src="https://codepen.io/phongduong/embed/preview/NWbvPjy?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/NWbvPjy'>Reset a property in CSS</a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the demo, the first paragraph is green, the second one is black. The second paragraph's `color` has the `unset` keywork. It reset the property to the `initial` value, black. 

In the `div` element, its `color` will be `red`. But I set the paragraph's `color` to yellow. After that, I reset the `color` property. Because the paragraph inherits `color`'s value from its parent element, `div`. So that after resetting, the paragraph is red.