---
title: Create text gradient
date: 2020-12-25T13:41:57.638Z
tag: css
---
You can create text with a single color or multiple colors to create gradient text with CSS. In this tutorial, I will show you how to create gradient text using [`background-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) CSS property.

[`background-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) sets an element's background extends underneath its border box, padding box, content box or within the foreground text. We will use `text` value for this property.

We create a paragraph first.

```pug
p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

The paragraph needs a background with a gradient color. You set the `background-clip` property to `text` value. It is the main point of this tutorial.

```scss
p {
  background-image: repeating-linear-gradient(#01fd69 2rem, tomato 3rem);
  background-clip: text;
}
```

You won't see the color of the text changes because you only set the background and the paragraph is still using the default color. To change it and see the background, you change the `color` of the paragraph to `transparent` value.

```scss
p {
	background-image: repeating-linear-gradient(#01fd69 2rem, tomato 3rem);
	background-clip: text;
	color: transparent;
}
```

Now you can see the text with two colors: green and tomato. There is an interesting thing that the `background-clip` and `background-image` properties only change the background's properties. It means that we can create gradient text for a specific element of the text like the first line or the first letter with CSS `pseudo-elemnt`

You change the CSS

<iframe height="265" style="width: 100%;" scrolling="no" title="Gradient text" src="https://codepen.io/phongduong/embed/preview/KKgmMaV?height=265&theme-id=dark&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/KKgmMaV'>Gradient text</a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>