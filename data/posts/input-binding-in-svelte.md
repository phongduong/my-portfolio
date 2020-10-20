---
title: Input binding in Svelte
date: 2020-08-12T15:00:00.000Z
tag: svelte
---

Application often uses form. In Svelte, you don't need to listen to `on:input` event and update the value then. You can use `bind:value` directive to update the value. You can use shorthand form if the names match

```javascript
<input bind:value={name}>
// shorthand form
<textarea bind:value></textarea>
```
