---
title: "How to create pattern with CSS #6"
description: Learn how to use CSS to create a simple and beautiful pattern
date: 2020-08-26T12:59:04.156Z
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
  background: conic-gradient(
      at 50% 7rem,
      var(--transparent) 40deg,
      var(--red) 40deg 45deg,
      var(--yellow) 45deg 130deg,
      var(--red) 130deg 230deg,
      var(--yellow) 205deg 315deg,
      var(--red) 315deg 320deg,
      var(--transparent) 320deg
    ),
    radial-gradient(
      circle at 50% 7rem,
      var(--transparent) 2rem,
      var(--red) 2rem 2.2rem,
      var(--yellow) 2.2rem 6rem,
      var(--red) 6rem 6.2rem,
      var(--yellow) 6.2rem
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 0 3.9rem,
      var(--red) 3.95rem 4.05rem,
      var(--transparent) 4.1rem
    ),
    linear-gradient(
      60deg,
      var(--transparent) 0 3.9rem,
      var(--red) 3.95rem 4.05rem,
      var(--transparent) 4.1rem
    ),
    linear-gradient(
      -60deg,
      var(--transparent) 0 3.9rem,
      var(--red) 3.95rem 4.05rem,
      var(--transparent) 4.1rem
    );
  background-size: 8rem 8rem;
}
```

Result

![Pattern 6](/uploads/ptrn-6.mp4_snapshot_00.35_-2020.08.12_20.33.54-.jpg)