---
title: Each block in Svelte
description: Iterate array with each block in Svelte
date: 2020-08-11T15:00:00.000Z
tag: svelte
---
To iterate array in Svelte, you use `each` block

```javascript
<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

{#each cats as cat, i}
	<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
		{i + 1}: {cat.name}
	</a></li>
{/each}
```

You can use destruction normally. In case you need to pass key to the elements inside `each` block, you can use any type of value as key even object

```javascript
{#each things as thing (thing.id)}
	<Thing current={thing.color}/>
{/each}
```