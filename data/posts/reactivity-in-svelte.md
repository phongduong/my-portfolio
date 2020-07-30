---
title: Reactivity in Svelte
description: "React to updated states in Svelte "
date: 2020-08-10T15:00:00.000Z
tag: svelte
---
After the component updates, you may need to compute some values from the updated value. Svelte has reactive declarations and statements to help you do that. Reactive declarations help you to derive values from updated value 

```javascript
let count = 0;
$: doubled = count * 2;
```

In case you need to do something other than computing values after component updated, you can use reactive statements.

```javascript
$: {
	console.log(`the count is ${count}`);
	alert(`I SAID THE COUNT IS ${count}`);
}
```