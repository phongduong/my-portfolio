---
title: Custom list style with 👉 emoji
date: 2020-12-17T07:32:14.103Z
tag: css
---
``[`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) property supports a variety of values. It allows you to set the style of the list item's marker in different languages. But you can make it look more colorful and beautiful with emoji. In this tutorial, I will show you how to use emoji for the list item's marker.

```pug
- const listItems = ['One', 'Two', 'Three', 'Four', 'Five'];

ul 
  each item in listItems
    li= item
```

 We will have a list that includes 5 items. 

```scss
ul {
  list-style-type: "👉";
}
```

We will disable the `list-style-type` property of the list. Because this 

<iframe height="265" style="width: 100%;" scrolling="no" title="Custom list style with emoji" src="https://codepen.io/phongduong/embed/preview/yLaVzgO?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/phongduong/pen/yLaVzgO'>Custom list style with emoji</a> by Phong Duong
  (<a href='https://codepen.io/phongduong'>@phongduong</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>