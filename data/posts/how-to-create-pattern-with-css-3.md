---
title: "How to create pattern with CSS #3"
date: 2020-08-21T12:48:35.820Z
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
  background: radial-gradient(
      var(--transparent) 0 3.5rem,
      var(--yellow) 3.5rem 4rem,
      var(--transparent) 4rem
    ), radial-gradient(
      at 0 0,
      var(--transparent) 0 3.5rem,
      var(--yellow) 3.5rem 4rem,
      var(--transparent) 4rem
    ), radial-gradient(
      at 0 100%,
      var(--transparent) 0 3.5rem,
      var(--yellow) 3.5rem 4rem,
      var(--transparent) 4rem
    ), radial-gradient(
      at 100% 0,
      var(--transparent) 0 3.5rem,
      var(--yellow) 3.5rem 4rem,
      var(--transparent) 4rem
    ), radial-gradient(
      at 100% 100%,
      var(--transparent) 0 3.5rem,
      var(--yellow) 3.5rem 4rem,
      var(--transparent) 4rem
    ), var(--red);
  background-size: 8rem 8rem;
}
```

Result

![Pattern 3](/uploads/ptrn-3-sound.mp4_snapshot_00.27_-2020.08.12_20.33.19-.jpg)
