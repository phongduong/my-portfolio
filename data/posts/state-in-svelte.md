---
title: State in Svelte
date: 2020-08-03T15:00:00.000Z
tag: svelte
---

Defining a state in Svelte is like defining a JS variable, you put your statement inside the script tag. Your statement must begin with `let`, if you want to reassign new value to the state. You can use `const` with your state but it is read only.

```javascript
<script>let name = 'world';</script>
```

To use the state, you just need to pass the state to the place you want and put it inside a bracket.

```html
<h1>Hello {name}!</h1>
```

I also have a video for this tutorial. If you prefer learning by watching the video, you can watch it at

https://youtu.be/zHMA2ig3ETw
