---
title: Custom outline style with CSS
date: 2020-11-27T03:40:25.919Z
tag: css
---
You can custom the outline of the component when you focus on it. CSS allows you to custom these properties:

* `outline-color`
* `outline-style`
* `outline-width`

The order of these properties doesn't matter. You can use only one, two, or all three of them.

## For example:

```css
button {
	background: tomato;
	color: white;
	width: 200px;
	height: 200px;
	border: none;
}

button:focus {
    outline: blue dotted 5px;
}

```

When you click the button, you will see the blue dotted outline around the button. 

![Outline when user clicks the button](/uploads/outline-click.png "Outline when user clicks the button")

The outline doesn't take up space. It won't affect the layout if it shows up.