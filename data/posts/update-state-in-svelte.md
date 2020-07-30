---
title: Update state in Svelte
description: Learn how to update state in Svelte
date: 2020-08-07T15:00:00.000Z
tag: svelte
---
In a Svelte application, you will need to update the state to make your app more dynamically. To update the state, you only need to reassign the new value to your state. 

```javascript
<script>
	let count = 0;

	function handleClick() {
      count += 1;
	}
</script>
```

This reassignment will apply for every type of values. If you want to update properties of arrays or objects, you need to reassignment a new value to the property

```javascript
// Update array length
numbers[numbers.length] = numbers.length + 1;

// Update object property
foo.bar = 'baz';
```

This quote from Svelte describes exactly how updating states works

> A simple rule of thumb: the name of the updated variable must appear on the left hand side of the assignment