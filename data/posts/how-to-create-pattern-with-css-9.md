---
title: "How to create pattern with CSS #9"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-08-31T13:06:19.350Z
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
      at 50% 0.25rem,
      var(--red) 120deg,
      var(--transparent) 120deg 240deg,
      var(--red) 240deg
    ),
    linear-gradient(var(--transparent) 8.5rem, var(--red) 8.5rem),
    linear-gradient(
      0.25turn,
      var(--red) 0.25rem,
      var(--transparent) 0.25rem 1.75rem,
      var(--yellow) 1.75rem 2.25rem,
      var(--transparent) 2.25rem 3.75rem,
      var(--red) 3.75rem
    ),
    conic-gradient(
      at 50% 1.5rem,
      var(--yellow) 30deg,
      var(--transparent) 30deg 330deg,
      var(--yellow) 330deg
    ),
    conic-gradient(
      at 50% 3rem,
      var(--red) 30deg,
      var(--transparent) 30deg 330deg,
      var(--red) 330deg
    ),
    conic-gradient(
      at 50% 4rem,
      var(--yellow) 30deg,
      var(--transparent) 30deg 330deg,
      var(--yellow) 330deg
    ),
    conic-gradient(
      at 50% 5rem,
      var(--red) 30deg,
      var(--transparent) 30deg 330deg,
      var(--red) 330deg
    ),
    conic-gradient(
      at 50% 6rem,
      var(--yellow) 30deg,
      var(--transparent) 30deg 330deg,
      var(--yellow) 330deg
    ),
    conic-gradient(
      at 50% 7rem,
      var(--red) 30deg,
      var(--transparent) 30deg 330deg,
      var(--red) 330deg
    ),
    conic-gradient(
      at 50% 8rem,
      var(--yellow) 30deg,
      var(--red) 30deg 330deg,
      var(--yellow) 330deg
    );
  background-size: 4rem 9rem;
}
```

Result

![Pattern 9](/uploads/ptrn-9-sound.mp4_snapshot_00.43_-2020.08.12_20.34.19-.jpg)