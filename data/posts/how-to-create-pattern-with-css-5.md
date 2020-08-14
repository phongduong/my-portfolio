---
title: "How to create pattern with CSS #5"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-08-25T12:56:25.416Z
tag: css
---
```html
<div></div>
```

```css
:root {
  --red: red;
  --yellow: yellow;
  --transparent: #0000;
}
div {
  min-height: 100vh;
  background: linear-gradient(
      0.25turn,
      var(--transparent) 0 2.85rem,
      var(--yellow) 2.85rem 3.15rem,
      var(--transparent) 3.15rem
    ),
    conic-gradient(
      at 50% 0,
      var(--red) 105deg,
      var(--transparent) 95deg 255deg,
      var(--red) 255deg
    ),
    conic-gradient(
      at 50% 5.1rem,
      var(--transparent) 75deg,
      var(--red) 75deg 285deg,
      var(--transparent) 285deg
    ),
    linear-gradient(
      -15deg,
      var(--transparent) 0 3.5rem,
      var(--red) 3.5rem 3.8rem,
      var(--transparent) 3.8rem 8.3rem,
      var(--red) 8.3rem 8.6rem,
      var(--transparent) 8.6rem
    ),
    linear-gradient(
      15deg,
      var(--transparent) 0 3.5rem,
      var(--red) 3.5rem 3.8rem,
      var(--transparent) 3.8rem 8.3rem,
      var(--red) 8.3rem 8.6rem,
      var(--transparent) 8.6rem
    ),
    linear-gradient(
      0.25turn,
      var(--red) 0 0.15rem,
      var(--transparent) 0.15rem 5.85rem,
      var(--red) 5.85rem
    ),
    var(--yellow);
  background-size: 6rem 8rem;
}
```

Result

![Pattern 5](/uploads/ptrn-5.mp4_snapshot_00.27_-2020.08.12_20.33.46-.jpg)