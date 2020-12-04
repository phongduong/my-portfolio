---
title: caret-color CSS property
date: 2020-12-11T15:11:53.301Z
tag: css
---
Caret is a cursor in the `input`, `textarea` elements. It shows where the next typed character will be inserted. `caret-color` property sets the color of the caret. It can also be used for the elements with `contenteditable` attribute. The default value of this attribute is `auto`. It will take `currentcolor` and usually black. 

```pug
input
```

```css
input {
	color: red;
}
```

When you type the text in the input, the text color is red. `caret-color` will take the value of `color` property. 

```pug
textarea(rows="5")
```

```css
textarea {
	caret-color: transparent;
}
```

`caret-color` can take `transparent` value but it is hard to see where the cursor is especially when you are inserting in between the text.

```pug
p(contenteditable="true") Please click this text and edit it

```

```css
p[contenteditable="true"] {
	background: black;
	color: yellowgreen;
	caret-color: tomato;
}

```

Although `caret-color` takes the value of `color` property by default, you can set a different value to ensure good visibility.

Here is the full example

<iframe height="265" style="width: 100%;" scrolling="no" title="caret-color CSS property" src="https://codepen.io/phongduong/embed/preview/pobVQbY?height=265&theme-id=dark&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/pobVQbY'>caret-color CSS property</a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>