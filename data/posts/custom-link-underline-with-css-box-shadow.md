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

In the style, you disable the `text-decoration` property with `none` value. You will set the tomato color for the underline. We need to create space between the text and the underline. We set the `padding` of the link `4px`

```scss
a {
	text-decoration: none;
	padding: 4px;
	box-shadow: 0 3px tomato;
}

```

You can see that your link underline has a new color. We can stop here but