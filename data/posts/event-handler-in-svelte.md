---
title: Event handler in Svelte
description: Listen to event and execute functions in Svelte
date: 2020-08-13T15:00:00.000Z
tag: svelte
---
In Svelte, you use `on:` directive to listen to event on elements

```javascript
<div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>
```