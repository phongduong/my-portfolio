---
title: "How to create pattern with CSS #18"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-09-14T14:23:50.706Z
tag: css
---
```html
<div></div>
```

```css
div {
  min-height: 100vh;
  background: linear-gradient(
      0.25turn,
      var(--red) 0.5rem,
      var(--transparent) 0.5rem 6.5rem,
      var(--red) 6.5rem
    ),
    linear-gradient(
      var(--transparent) 3.05rem,
      var(--yellow) 3.05rem 3.55rem,
      var(--transparent) 3.55rem 4.45rem,
      var(--yellow) 4.45rem 4.95rem,
      var(--transparent) 4.95rem
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 3rem,
      var(--red) 3rem 4rem,
      var(--transparent) 4rem
    ),
    radial-gradient(
      circle,
      var(--transparent) 3rem,
      var(--yellow) 3rem 3.5rem,
      var(--red) 3.5rem
    ),
    conic-gradient(at 4.5rem 3.5rem, var(--red) 90deg, var(--transparent) 90deg),
    conic-gradient(
      from 90deg at 4.5rem 4.5rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 180deg at 2.5rem 4.5rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 270deg at 2.5rem 3.5rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 1.5rem,
      var(--yellow) 1.5rem 2rem,
      var(--transparent) 2rem 5rem,
      var(--yellow) 5rem 5.5rem,
      var(--transparent) 5.5rem
    ),
    linear-gradient(
      var(--transparent) 3rem,
      var(--red) 3rem 5rem,
      var(--transparent) 5rem
    ),
    linear-gradient(
      var(--transparent) 2.5rem,
      var(--red) 2.5rem 3rem,
      var(--transparent) 3rem 5rem,
      var(--red) 5rem 5.5rem,
      var(--transparent) 5.5rem
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 2.5rem,
      var(--yellow) 2.5rem 3rem,
      var(--transparent) 3rem 4rem,
      var(--yellow) 4rem 4.5rem,
      var(--transparent) 4.5rem
    );
  background-size: 7rem 8rem;
}
```

Result

![Pattern 18](/uploads/ptrn-18.mp4_snapshot_00.51_-2020.08.12_20.35.32-.jpg)