---
title: onMount lifecycle in Svelte
description: Learn how to call function when a component mounted to the DOM in Svelte
date: 2020-08-06T15:00:00.000Z
tag: svelte
---
When developing a Svelte, you sometimes need to do something after your component mounted to the DOM. It may be fetching api, initiating 3rd party library or registering DOM event listener. First, you need to import onMount function from Svelte. After that, you pass your function as an argument to the function. If your function returns a function, it will be called when the component is unmounted

```javascript
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const interval = setInterval(() => {
			console.log('beep');
		}, 1000);
        
        // this function will be called when component is unmounted
		return () => clearInterval(interval);
	});
</script>
```