---
title: Event forwarding in Svelte
date: 2020-08-15T15:00:00.000Z
tag: svelte
---

Event forwarding will help you listen to event in the child component. To forward event, you need to create an event dispatcher and pass the name of the event and data to the dispatcher

```javascript
// App.svelte
<script>
	import Outer from './Outer.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<Outer on:message={handleMessage}/>

// Outer.svelte
 <script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>
```
