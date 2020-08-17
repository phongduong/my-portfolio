---
title: "How to create pattern with CSS #19"
description: Learn how to use CSS to create a simple and beautiful pattern
date: 2020-09-15T14:25:27.661Z
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
      from 342deg at 5rem 3.49rem,
      var(--red) 108deg,
      var(--transparent) 108deg
    ),
    conic-gradient(
      from 270deg at 3rem 3.49rem,
      var(--red) 108deg,
      var(--transparent) 108deg
    ),
    conic-gradient(
      from 198deg at 2.4rem 5.2rem,
      var(--red) 108deg,
      var(--transparent) 108deg
    ),
    conic-gradient(
      from 126deg at 4rem 6.2rem,
      var(--red) 108deg,
      var(--transparent) 108deg
    ),
    conic-gradient(
      from 54deg at 5.6rem 5.2rem,
      var(--red) 108deg,
      var(--transparent) 108deg
    ),
    var(--yellow);
  background-size: 8rem 8rem;
}
```

Result

![Pattern 19](/uploads/ptrn-19.mp4_snapshot_00.31_-2020.08.12_20.35.39-.jpg)