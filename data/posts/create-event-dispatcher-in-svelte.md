---
title: Create event dispatcher in Svelte
description: Event dispatcher plays an important role in event forwarding in Svelte
date: 2020-08-14T15:00:00.000Z
tag: svelte
---
To create a event dispatcher, you need to `createEventDispatcher` function from Svelte. This will return a dispatch function and you will use it to forward event to the parent component

```javascript
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

```