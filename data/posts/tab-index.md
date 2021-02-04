---
title: tabindex
date: 2021-02-26T04:06:26.254Z
tag: html
---
`tabindex` attribute indicates whether the element can be focused. It also shows the order in the sequential keyboard navigation.

It accepts an integer.

* `-1`: the element can't be focused by sequential keyboard navigation but could be focused with Javascript or by clicking
* `0`:  The element can be focused by sequential keyboard navigation. It will be focused after positive `tabindex`. This is the default value
* A positive value: the element can be focused on by sequential keyboard navigation. Its order is defined by the value of the number. The elements with positive values will be focused before those with `0` value

If there are many elements with the same value, their order is defined by the document's source order

## Example

<iframe height="265" style="width: 100%;" scrolling="no" title="Tab order" src="https://codepen.io/phongduong/embed/preview/PoGMyQm?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/PoGMyQm'>Tab order</a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

When you press `tab` key, the focus ring will be navigated in the order 1, 2, 3, 4, 0. The element with `tabindex="-1"` can't be focused.