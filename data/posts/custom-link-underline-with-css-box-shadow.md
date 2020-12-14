---
title: Custom link underline with CSS box-shadow
date: 2020-12-16T07:29:16.336Z
tag: css
---
When you create a website, you can customize the text color with `color` property. It will change the color of your text as well as the link underline color. But what if you want to set the link underline a different color from the text's color? There are various ways to do that. In this tutorial, I will show you how to use `box-shadow` property to customize the link underline.

You create an anchor element.

```pug
a(href="/") This is a link

```

In CSS, you disable the `text-decoration` property with `none` value. The reason we set the text color `black` is that it will change after activating. You will set the `tomato` color for the underline. We need to create space between the text and the underline. We set the `padding` of the link `4px`.

```scss
a {
	text-decoration: none;
	color: black;
	padding: 4px;
	box-shadow: 0 3px tomato;
}

```

You can see that your link underline has a new color. But it doesn't give the user any feedback when they hover over the link. We will make it responds to when the user interacts with the link. 

```scss
a {
	text-decoration: none;
	color: black;
	padding: 4px;
	box-shadow: 0 3px tomato;

	&:hover {
		background: tomato;
		color: white;
		box-shadow: 0px 10px 10px 0px gray;
	}
}

```

The link will be `white` with `tomato` background. It also had a gray shadow under the link when you hover the link. But it looks like quite lagging. To make it smoother, we will use `transition` property. 

```scss
a {
  transition: background 0.1s, box-shadow 0.3s, color 0.1s;
}
```

The text color and the background will change in `0.1s` while the box-shadow is in `0.3s`. It is smoother now. You can change the transition duration to any value you want. 

Full code

<iframe height="265" style="width: 100%;" scrolling="no" title="Custom link underline with CSS box-shadow" src="https://codepen.io/phongduong/embed/preview/OJRRqBj?height=265&theme-id=dark&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/OJRRqBj'>Custom link underline with CSS box-shadow</a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>