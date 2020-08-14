---
title: "How to create pattern with CSS #2"
description: Learn how to use CSS to create a simple and beautifull pattern
date: 2020-08-20T12:45:28.398Z
tag: css
---
```html
<div>
</div>
```

```css
div {
  min-height: 100vh;
  background: conic-gradient(
      at 0 2rem,
      var(--red) 45deg,
      var(--transparent) 45deg
    ),
    conic-gradient(
      from 135deg at 0 6rem,
      var(--red) 45deg,
      var(--transparent) 45deg
    ),
    conic-gradient(
      from 315deg at 100% 2rem,
      var(--red) 45deg,
      var(--transparent) 45deg
    ),
    conic-gradient(
      from 45deg at 6rem 100%,
      var(--red) 45deg,
      var(--transparent) 45deg
    ),
    linear-gradient(
      var(--yellow) 0 0.25rem,
      var(--transparent) 0.25rem 3.75rem,
      var(--yellow) 3.75rem 4.25rem,
      var(--transparent) 4.25rem 7.75rem,
      var(--yellow) 7.75rem
    ),
    linear-gradient(
      0.25turn,
      var(--yellow) 0 0.25rem,
      var(--transparent) 0.25rem 3.75rem,
      var(--yellow) 3.75rem 4.25rem,
      var(--transparent) 4.25rem 7.75rem,
      var(--yellow) 7.75rem
    ),
    linear-gradient(
      45deg,
      var(--yellow) 0 2rem,
      var(--transparent) 2rem 9.3rem,
      var(--yellow) 9.3rem
    ),
    linear-gradient(
      -45deg,
      var(--yellow) 0 2rem,
      var(--transparent) 2rem 9.3rem,
      var(--yellow) 9.3rem
    ),
    linear-gradient(
      var(--red) 0 2.1rem,
      var(--transparent) 2.1rem 5.9rem,
      var(--red) 5.9rem
    ),
    linear-gradient(
      0.25turn,
      var(--red) 0 2.1rem,
      var(--transparent) 2.1rem 5.9rem,
      var(--red) 5.9rem
    ),
    conic-gradient(
      from 135deg at 50% 2.1rem,
      var(--transparent) 90deg,
      var(--red) 90deg 180deg
    ),
    conic-gradient(
      from 315deg at 50% 5.9rem,
      var(--transparent) 90deg,
      var(--red) 90deg 180deg
    ),
    var(--yellow);
  background-size: 8rem 8rem;
}
```

Result

![Pattern 2](/uploads/ptrn-2-yt.mp4_snapshot_00.44_-2020.08.12_20.33.08-.jpg)