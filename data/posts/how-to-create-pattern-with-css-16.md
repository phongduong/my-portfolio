---
title: "How to create pattern with CSS #16"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-09-10T13:42:38.911Z
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
      var(--transparent) 3.25rem,
      var(--yellow) 3.25rem 3.75rem,
      var(--transparent) 3.75rem
    ),
    linear-gradient(
      0.25turn,
      var(--red) 0.5rem,
      var(--transparent) 0.5rem 6.5rem,
      var(--red) 6.5rem
    ),
    radial-gradient(
      circle at 50% 0.87rem,
      var(--transparent) 3.5rem,
      var(--yellow) 3.5rem 3.75rem,
      var(--red) 3.75rem
    ),
    conic-gradient(
      from 120deg at 50% 1rem,
      var(--yellow) 120deg,
      var(--red) 120deg
    );
  background-size: 7rem 6rem;
}
```

![Pattern 16](/uploads/ptrn-16.mp4_snapshot_00.19_-2020.08.12_20.35.20-.jpg)