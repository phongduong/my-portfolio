---
title: "How to create pattern with CSS #11"
description: Learn how to use CSS to create a simple and beautiful pattern
date: 2020-09-03T13:30:33.144Z
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
      0.25turn,
      var(--red) 0.25rem,
      var(--transparent) 0.25rem 1.25rem,
      var(--red) 1.25rem 1.75rem,
      var(--transparent) 1.75rem 2.75rem,
      var(--red) 2.75rem
    ),
    conic-gradient(
      at 50% -0.5rem,
      var(--red) 135deg,
      var(--transparent) 135deg 225deg,
      var(--red) 225deg
    ),
    conic-gradient(
      at 50% 6.5rem,
      var(--transparent) 45deg,
      var(--red) 45deg 315deg,
      var(--transparent) 315deg
    ),
    conic-gradient(
      at 50% 2rem,
      var(--yellow) 135deg,
      var(--transparent) 135deg 225deg,
      var(--yellow) 225deg
    ),
    conic-gradient(
      at 50% 4rem,
      var(--red) 45deg,
      var(--yellow) 45deg 315deg,
      var(--red) 315deg
    );
  background-size: 3rem 6rem;
}
```

Result

![Pattern 11](/uploads/ptrn-11.mp4_snapshot_00.25_-2020.08.12_20.34.40-.jpg)