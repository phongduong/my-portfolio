---
title: "How to create pattern with CSS #4"
date: 2020-08-24T12:50:24.039Z
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
  background: radial-gradient(var(--yellow) 0 1.5rem, var(--transparent) 1rem),
    radial-gradient(at 0% 0%, var(--yellow) 0 1.5rem, var(--transparent) 1rem),
    radial-gradient(
      at 0% 100%,
      var(--yellow) 0 1.5rem,
      var(--transparent) 1rem
    ), radial-gradient(
      at 100% 0%,
      var(--yellow) 0 1.5rem,
      var(--transparent) 1rem
    ), radial-gradient(
      at 100% 100%,
      var(--yellow) 0 1.5rem,
      var(--transparent) 1rem
    ), linear-gradient(
      0deg,
      var(--transparent) 0 2.5rem,
      var(--yellow) 2.5rem 3rem,
      var(--transparent) 3rem 7rem,
      var(--yellow) 7rem 7.5rem,
      var(--transparent) 7.5rem 10rem
    ), linear-gradient(
      90deg,
      var(--transparent) 0 2.5rem,
      var(--yellow) 2.5rem 3rem,
      var(--transparent) 3rem 7rem,
      var(--yellow) 7rem 7.5rem,
      var(--transparent) 7.5rem 10rem
    ), var(--red);
  background-size: 10rem 10rem;
}
```

Result

![Pattern 4](/uploads/ptrn-4-sound.mp4_snapshot_00.26_-2020.08.12_20.33.38-.jpg)
