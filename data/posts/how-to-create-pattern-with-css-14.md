---
title: "How to create pattern with CSS #14"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-09-08T13:38:40.525Z
tag: css
---
```html
<div></div>
```

```css
div {
  min-height: 100vh;
  background: linear-gradient(
      var(--red) 0.25rem,
      var(--transparent) 0.25rem 3.5rem,
      var(--red) 3.5rem 4rem,
      var(--transparent) 4rem 7.25rem,
      var(--red) 7.25rem
    ),
    linear-gradient(
      0.25turn,
      var(--red) 0.25rem,
      var(--transparent) 0.25rem 3.5rem,
      var(--red) 3.5rem 4rem,
      var(--transparent) 4rem 7.25rem,
      var(--red) 7.25rem
    ),
    conic-gradient(
      at 2.5rem 2rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 90deg at 5.5rem 2.5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 180deg at 5rem 5.5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 270deg at 2rem 5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    linear-gradient(
      var(--transparent) 2rem,
      var(--red) 2rem 2.5rem,
      var(--transparent) 2.5rem 5rem,
      var(--red) 5rem 5.5rem,
      var(--transparent) 5.5rem
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 2rem,
      var(--red) 2rem 2.5rem,
      var(--transparent) 2.5rem 5rem,
      var(--red) 5rem 5.5rem,
      var(--transparent) 5.5rem
    ),
    var(--red);
  background-size: 7.5rem 7.5rem;
}
```

![Pattern 14](/uploads/ptrn-14.mp4_snapshot_00.32_-2020.08.12_20.35.06-.jpg)