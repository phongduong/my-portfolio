---
title: "How to create pattern with CSS #1"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-08-19T15:00:00.000Z
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
      135deg,
      var(--transparent) 0 3.8rem,
      var(--red) 3.8rem 4.68rem,
      var(--yellow) 4.68rem 8.04rem,
      var(--red) 8.04rem 8.92rem,
      var(--transparent) 8.92rem
    ),
    linear-gradient(
      -135deg,
      var(--yellow) 0 3.77rem,
      var(--red) 3.77rem 4.21rem,
      var(--yellow) 4.2rem 8rem,
      var(--red) 8rem 8.46rem,
      var(--transparent) 8.46rem 14.4rem,
      var(--red) 14.4rem 14.82rem,
      var(--yellow) 14.82rem
    ),
    linear-gradient(
      135deg,
      var(--yellow) 0 12.28rem,
      var(--red) 12.28rem 13.16rem,
      var(--yellow) 13.16rem
    );
  background-size: 21rem 6rem;
 }
```

Result

![Pattern 1](/uploads/ptrn-1-yt.mp4_snapshot_00.19_-2020.08.12_20.32.50-.jpg)