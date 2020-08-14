---
title: "How to create pattern with CSS #15"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-09-09T13:40:53.722Z
tag: css
---
```html
<div></div>
```

```css
div {
 min-height: 100vh;
  background: linear-gradient(
      var(--red) 0.5rem,
      var(--transparent) 0.5rem 9.5rem,
      var(--red) 9.5rem
    ),
    linear-gradient(
      0.25turn,
      var(--red) 0.5rem,
      var(--transparent) 0.5rem 4.5rem,
      var(--red) 4.5rem 5.5rem,
      var(--transparent) 5.5rem 9.5rem,
      var(--red) 9.5rem
    ),
    linear-gradient(
      var(--yellow) 1.5rem,
      var(--transparent) 1.5rem 4.5rem,
      var(--yellow) 4.5rem 5.5rem,
      var(--transparent) 5.5rem 8.5rem,
      var(--yellow) 8.5rem
    ),
    conic-gradient(
      at 8.5rem 4.5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 270deg at 1.5rem 4.5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(at 8.5rem 6.5rem, var(--red) 90deg, var(--transparent) 90deg),
    conic-gradient(
      from 270deg at 1.5rem 6.5rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(at 7.5rem 4.5rem, var(--red) 90deg, var(--transparent) 90deg),
    conic-gradient(
      from 270deg at 2.5rem 4.5rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    linear-gradient(
      var(--transparent) 3.5rem,
      var(--red) 3.5rem 4.5rem,
      var(--transparent) 4.5rem
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 3.5rem,
      var(--yellow) 3.5rem 4.5rem,
      var(--transparent) 4.5rem 5.5rem,
      var(--yellow) 5.5rem 6.5rem,
      var(--transparent) 6.5rem
    ),
    linear-gradient(
      0.25turn,
      var(--yellow) 1.5rem,
      var(--transparent) 1.5rem 8.5rem,
      var(--yellow) 8.5rem
    ),
    linear-gradient(
      var(--red) 2.5rem,
      var(--yellow) 2.5rem 3.5rem,
      var(--transparent) 3.5rem
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 2.5rem,
      var(--red) 2.5rem 7.5rem,
      var(--transparent) 7.5rem
    ),
    linear-gradient(
      to top,
      var(--red) 2.5rem,
      var(--yellow) 2.5rem 3.5rem,
      var(--transparent) 3.5rem
    ),
    var(--red);
  background-size: 10rem 10rem;
}
```

Result

![Pattern 15](/uploads/ptrn-15.mp4_snapshot_00.53_-2020.08.12_20.35.14-.jpg)