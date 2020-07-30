---
title: Spread attribute in Svelte
description: Make your Svelte code shorter and more readable with spreading attributes
date: 2020-08-04T15:01:00.000Z
tag: svelte
---
If you want to pass a object as attributes or props, you can spread your state. 

```javascript
<script>
	import Info from './Info.svelte';

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
</script>

// It's quite long
<Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/>
// Shorter
<Info {...pkg}/>
```

There are some properties that you spread in the Info component may not export yet, to retrieve all props you use `$$props`

```javascript
<Widget {...$$props}/>
```