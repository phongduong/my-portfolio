---
title: Props in Svelte
description: Learn how to define and export props in Svelte
date: 2020-08-04T15:00:00.000Z
tag: svelte
---
To define a property(prop) in Svelte, you use `export` keyword and export the variable that used as a prop. Your variable should be instantiated with `let` keyword. If you export `const`, `class `or `function`, it is read only. You can export function using function expression. When instantiating a prop, it is recommended to assigned a default value

```javascript
<script>
	export let bar = 'optional default initial value';
	// these are readonly
	export const thisIs = 'readonly';

	export function greet(name) {
		alert(`hello ${name}!`);
	}

	// this is a prop
	export let format = n => n.toFixed(2);
</script>
```

You can use reversed words as prop name

```javascript
<script>
	let className;

	// creates a `class` property, even
	// though it is a reserved word
	export { className as class };
</script>
```

If you prefer learning by watching, you can watch this tutorial here [https://youtu.be/_S54dko69aI](https://youtu.be/_S54dko69aI)