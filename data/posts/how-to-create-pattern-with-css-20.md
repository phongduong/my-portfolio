---
title: "How to create pattern with CSS #20  "
description: Learn how to use CSS to create a simple and beautiful pattern
date: 2020-09-16T14:27:27.810Z
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
      from 315deg at 50% 1.5rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    linear-gradient(var(--yellow) 1rem, var(--transparent) 1rem),
    conic-gradient(
      from 45deg at 50% 3rem,
      var(--red) 45deg,
      var(--transparent) 45deg
    ),
    conic-gradient(
      from 270deg at 50% 3rem,
      var(--red) 45deg,
      var(--transparent) 45deg
    ),
    conic-gradient(
      from 90deg at 70% 3rem,
      var(--red) 45deg,
      var(--transparent) 45deg
    ),
    conic-gradient(
      from 225deg at 30% 3rem,
      var(--red) 45deg,
      var(--transparent) 45deg
    ),
    linear-gradient(var(--yellow) 4rem, var(--transparent) 4rem),
    linear-gradient(
      45deg,
      var(--transparent) 6.1rem,
      var(--yellow) 6.1rem 7.1rem,
      var(--transparent) 7.1rem
    ),
    linear-gradient(
      -45deg,
      var(--transparent) 6.1rem,
      var(--yellow) 6.1rem 7.1rem,
      var(--transparent) 7.1rem
    ),
    var(--red);
  background-size: 10rem 6rem;
}
```

Result

![Pattern 20](/uploads/ptrn-20.mp4_snapshot_00.42_-2020.08.12_20.35.48-.jpg)