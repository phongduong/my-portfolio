---
title: Custom outline style with CSS
date: 2020-11-27T03:40:25.919Z
tag: css
---

You can custom the outline of the component when you focus on it. CSS allows you to custom these properties:

- `outline-color`
- `outline-style`
- `outline-width`

The order of these properties doesn't matter. You can use just one, two, or all three of them.

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

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="phongduong" data-slug-hash="KKgPvYO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom outline style ">
  <span>See the Pen <a href="https://codepen.io/phongduong/pen/KKgPvYO">
  Custom outline style </a> by Phong Duong (<a href="https://codepen.io/phongduong">@phongduong</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The outline doesn't take up space. It won't affect the layout when it shows up.
