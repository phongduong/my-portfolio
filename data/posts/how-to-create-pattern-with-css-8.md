---
title: "How to create pattern with CSS #8"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-08-28T13:04:29.328Z
tag: css
---
```html
<div></div>
```

```css
div {
 min-height: 100vh;
  background: linear-gradient(
      var(--yellow) 0 0.25rem,
      var(--transparent) 0.25rem 7.75rem,
      var(--yellow) 7.75rem
    ),
    linear-gradient(
      0.25turn,
      var(--yellow) 0 0.25rem,
      var(--transparent) 0.25rem 7.75rem,
      var(--yellow) 7.75rem
    ),
    conic-gradient(at 5.5rem 2rem, var(--red) 90deg, var(--transparent) 90deg),
    conic-gradient(
      from 90deg at 6rem 5.5rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 180deg at 2.5rem 6rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 270deg at 2rem 2.5rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    linear-gradient(
      var(--transparent) 0 2rem,
      var(--yellow) 2rem 2.5rem,
      var(--transparent) 2.5rem 5.5rem,
      var(--yellow) 5.5rem 6rem,
      var(--transparent) 6rem
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 0 2rem,
      var(--yellow) 2rem 2.5rem,
      var(--transparent) 2.5rem 5.5rem,
      var(--yellow) 5.5rem 6rem,
      var(--transparent) 6rem
    ),
    var(--red);
  background-size: 8rem 8rem;
}
```

Result

![Pattern 8](/uploads/ptrn-8.mp4_snapshot_00.33_-2020.08.12_20.34.10-.jpg)