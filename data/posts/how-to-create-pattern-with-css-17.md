---
title: "How to create pattern with CSS #17"
date: 2020-09-11T14:20:40.123Z
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
      var(--red) 0.5rem,
      var(--transparent) 0.5rem 4.5rem,
      var(--red) 4.5rem
    ), radial-gradient(
      circle at -4rem 50%,
      var(--red) 5.5rem,
      var(--transparent) 5.5rem
    ), radial-gradient(
      circle at 9rem 50%,
      var(--red) 5.5rem,
      var(--transparent) 5.5rem
    ), linear-gradient(var(--yellow) 0.25rem, var(--red) 0.25rem 0.75rem, var(
          --yellow
        ) 0.75rem 7.25rem, var(--red) 7.25rem 7.75rem, var(--yellow) 7.75rem);
  background-size: 6rem 8rem;
}
```

Result

![Pattern 17](/uploads/ptrn-17-sound.mp4_snapshot_00.20_-2020.08.12_20.35.27-.jpg)
