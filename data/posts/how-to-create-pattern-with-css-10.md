---
title: "How to create pattern with CSS #10"
description: Learn how to use CSS to create a simple and beautiful pattern
date: 2020-09-01T13:11:02.765Z
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
      var(--transparent) 2rem,
      var(--yellow) 2rem 4rem,
      var(--transparent) 4rem
    ),
    linear-gradient(
      0.25turn,
      var(--red) 0 2rem,
      var(--transparent) 2rem 6rem,
      var(--red) 6rem
    ),
    linear-gradient(var(--yellow) 6rem, var(--red) 6rem);
  background-size: 8rem 8rem;
}
```

Result

![Pattern 10](/uploads/ptrn-10-sound.mp4_snapshot_00.20_-2020.08.12_20.34.27-.jpg)