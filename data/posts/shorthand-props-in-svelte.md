---
title: Shorthand props in Svelte
date: 2020-08-05T15:00:00.000Z
tag: svelte
---

If you pass a state that has name match the attribute or prop, you can use shorthand props to speed up developing time

```javascript
<img src={src} />
// Use shorthand attribute
<img {src} />
```
