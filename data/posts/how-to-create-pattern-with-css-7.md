---
title: "How to create pattern with CSS #7"
description: Learn how to use CSS to create a simple and beautiful pattern
date: 2020-08-27T13:02:09.115Z
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
      from 180deg at 3.5rem 5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    conic-gradient(
      from 90deg at 4.5rem 5rem,
      var(--yellow) 90deg,
      var(--transparent) 90deg
    ),
    linear-gradient(
      0.25turn,
      var(--red) 0 0.5rem,
      var(--transparent) 0.5rem 7.5rem,
      var(--red) 7.5rem
    ),
    linear-gradient(
      var(--red) 0 1rem,
      var(--yellow) 1rem 4rem,
      var(--red) 4rem 5rem,
      var(--transparent) 5rem
    ),
    linear-gradient(
      0.25turn,
      var(--transparent) 0 3.5rem,
      var(--red) 3.5rem 4.5rem,
      var(--transparent) 4.5rem
    );
  background-size: 8rem 8rem;
}
```

Result

![Pattern 7](/uploads/ptrn-7.mp4_snapshot_00.25_-2020.08.12_20.34.03-.jpg)