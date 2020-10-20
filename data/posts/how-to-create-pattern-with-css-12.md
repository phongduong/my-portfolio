---
title: "How to create pattern with CSS #12"
date: 2020-09-04T13:34:23.727Z
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
  background: linear-gradient(to top, var(--red) 1rem, var(--transparent) 1rem),
    linear-gradient(
      0.25turn,
      var(--red) 0.5rem,
      var(--transparent) 0.5rem 3.5rem,
      var(--red) 3.5rem 4.5rem,
      var(--transparent) 4.5rem 7.5rem,
      var(--red) 7.5rem
    ), linear-gradient(
      var(--yellow) 1rem,
      var(--transparent) 1rem 3rem,
      var(--yellow) 3rem 4rem,
      var(--red) 4rem 5rem,
      var(--yellow) 5rem 6rem,
      var(--transparent) 6rem 8rem,
      var(--yellow) 8rem 9rem,
      var(--transparent) 9rem
    ), conic-gradient(
      from 270deg at 2.5rem 3rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ), conic-gradient(
      at 5.5rem 3rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ), conic-gradient(
      at 5.5rem 3rem,
      var(--red) 90deg,
      var(--transparent) 90deg 270deg,
      var(--yellow) 270deg
    ), linear-gradient(
      0.25turn,
      var(--yellow) 1.5rem,
      var(--transparent) 1.5rem 6.5rem,
      var(--yellow) 6.5rem
    ), var(--red);
  background-size: 8rem 10rem;
}
```

Result

![Pattern 12](/uploads/ptrn-12-sound.mp4_snapshot_00.40_-2020.08.12_20.34.49-.jpg)
