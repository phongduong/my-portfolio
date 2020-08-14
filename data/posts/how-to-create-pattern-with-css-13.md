---
title: "How to create pattern with CSS #13"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-09-07T13:36:13.249Z
tag: electronjs
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
      45deg,
      var(--transparent) 0 3.3rem,
      var(--yellow) 3.3rem 3.8rem,
      var(--transparent) 3.8rem 10.35rem,
      var(--yellow) 10.35rem 10.85em,
      var(--transparent) 10.85rem
    ),
    linear-gradient(
      -45deg,
      var(--transparent) 0 3.3rem,
      var(--yellow) 3.3rem 3.8rem,
      var(--transparent) 3.8rem 10.35rem,
      var(--yellow) 10.35rem 10.85em,
      var(--transparent) 10.85rem
    ),
    conic-gradient(
      from 135deg at 1rem 6.2rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 135deg at 9rem 6.2rem,
      var(--red) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 135deg at 50% 7rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 225deg at 1.5rem 3.5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 45deg at 8.5rem 3.5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    linear-gradient(
      to bottom,
      var(--transparent) 3.5rem,
      var(--red) 3.5rem 5rem,
      var(--transparent) 5rem
    ),
    linear-gradient(
      45deg,
      var(--transparent) 0 5.5rem,
      var(--red) 5.5rem 9.1rem,
      var(--transparent) 9.1rem
    ),
    linear-gradient(
      -45deg,
      var(--transparent) 0 5.74rem,
      var(--red) 5.5rem 9.1rem,
      var(--transparent) 9.1rem
    ),
    linear-gradient(
      45deg,
      var(--transparent) 0 9rem,
      var(--yellow) 9rem 9.5rem,
      var(--transparent) 9.5rem
    ),
    linear-gradient(
      -45deg,
      var(--transparent) 0 9rem,
      var(--yellow) 9rem 9.5rem,
      var(--transparent) 9.5rem
    ),
    var(--red);
  background-size: 10rem 10rem;
}
```

Result

![Pattern 13](/uploads/ptrn-13.mp4_snapshot_00.54_-2020.08.12_20.34.55-.jpg)