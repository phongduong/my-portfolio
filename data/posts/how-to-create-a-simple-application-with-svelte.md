---
title: How to create a simple application with Svelte
description: Learn main concepts of Svelte by building a simple application to
  fetch dog's images
date: 2020-07-27T15:00:00.000Z
tag: svelte
---
I have started learning Svelte recently. I think creating something is a best way to learn anything. So I created a simple application that fetches dog's images from <http://dog.ceo/> with Svelte. In this tutorial, I will show you how I created it.

This is [project's source code](https://github.com/phongduong/dog-image-app)

## Set up

Run the following command in your folder

```
npx degit sveltejs/template dog-image-app
cd dog-image-app
yarn install 
yarn dev
```

Inside the `src` folder, you can see 2 files `App.svelte` and `main.js`. `App.svelte` is our app container you. `main.js` will import `App.svelte` and mount it into DOM

A svelte file include 3 parts: JS code inside script tag, CSS inside style tag and HTML tags. You don't need to wrap HTML inside anything. Every file is a component

## Development

In `App.svelte` file, you keep the style and change the title of the page in `h1` to whatever you want

You define a state named `image` in the `script` tag. You can remove `name` property or change its name to `image` and assign a object

```html
<script>
  let image = {
    src: "",
    alt: "Dog image"
  }
</script>
```

In Svelte, you should define state with let instead of const. Because you update a state by reassigning a new value. I leave the `src` empty and the `alt` property is default for all image.

We need a component the that receives `image` state as property and display the image source. You create a new `Image.svelte` file, define a property named `image` and export it. 

```javascript
<script>
  export let image
</script>
```

You may wonder how I name variables with a same name. I will explain this later. For HTML of `Image` component, you create a image element and spread the `image` property as its attribute

```html
<img {...image} />
```

In `App` component, you import the `Image` component, put it under the title and pass the `image` state to the `Image` component

```html
<script>
  import Image from "./Image.svelte"
  ...
</script>
<main>
  <h1>Dog image app</h1>
  <Image image={image}/>
</main>
```

You can see that we repeat image twice. Svelte allows us to use shorthand attributes if the name and value are same. 

```html
<Image {image}/>
```

Our application needs to allow users to select the dog breed they want or we can fetch random images. You create an Input component, define a state with default value and export a breedList property.

```html
<script>
  let value = "random"
  export let breedList
</script>
<form>
  <select bind:value>
    <option value="random"></option>
  </select>
  <input type="submit" value="Get new image" />
</form>
```

As you can see, we can bind state to the element's value attribute using `bind:value` directive. You don't need to create event handler for onInput event and update the state. The `bind:value` can use shorthand form if the variable's name is `value`. We will fetch the breed list using axios

```javascript
// config.js
export default {
  BASE_URL: "https://dog.ceo/api",
};

// request.js
import axios from "axios";
import config from "./config";

const instance = axios.create({ baseURL: config.BASE_URL });

export default instance;
```

We create an axios instance with dog api as base url. Next we will call the api and get the breed list. 

```javascript
// utils.js
import request from "./request";

export const getBreedList = async () => {
  const result = await request.get("/breeds/list/all");

  return result.data.message;
};
```

We want to call this api when the application mounted and display to user. In the App component, you import `onMount` lifecycle event and Input component. We will call `getBreedList` function after the component mounted and update the `breedList` state

```html
<script>
  ...
  import { onMount } from "svelte"
  import Input from "./Input.svelte"
  import { getBreedList } from "./utils"
  ...
  let breedList = {}
  ...
  onMount(async () => {
    breedList = await getBreedList()
  })
</script>
<main>
  <h1>Dog image app</h1>
  <Input {breedList} />
  <Image {image} />
</main>
```

We need to format the return data from api and display it for user to select. 

```javascript
// utils.js
// Chec if the value is a sub breed
export const checkSub = (string) => /-/.test(string);
// Capitalize the string
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const formatString = (string) => {
  if (checkSub(string)) {
    const [sub, main] = string.split("-");

    return `${capitalize(sub)} ${capitalize(main)}`;
  }

  return capitalize(string);
};

export const formatList = (list) => {
  return Object.keys(list)
    .map((key) => {
      const subs = list[key];

      return subs.length === 0 ? key : subs.map((sub) => `${sub}-${key}`);
    })
    .reduce((pre, cur) => {
      if (typeof cur === "string") {
        return [...pre, { value: cur, label: formatString(cur) }];
      }

      return [
        ...pre,
        ...cur.map((breed) => ({ value: breed, label: formatString(breed) })),
      ];
    }, []);
};

```

In `Input` component, we will format the `breedList` as soon as it is updated

```javascript
<script>
  import { formatList } from "./utils"
  ...
  let formattedList = []
  
  $: {
    formattedList = formatList(breedList)
  }
</script>
<form>
  <select bind:value>
    <option value="random"></option>
    {#each formattedList as breed (breed.value)}
      <option value={breed.value}>{breed.label}</option>
    {/each}
  </select>
  <input type="submit" value="Get new image" />
</form>
```

The code after the dollar sign will be executed whenever the component updated. To iterate through the list, we use `each` block. The value between the bracket will be used as the key. 

Now we have the list and update the value when user selects. We will fetch the image of the dog breed user selected or random image.

```javascript
// utils.js
...
export const getRandomImage = async () => {
  const result = await request.get("/breeds/image/random");

  return result.data.message;
};

export const getImageByBreed = async (breedPath) => {
  const result = await request.get(`/breed/${breedPath}/images/random`)

  return result.data.message
}
```

```javascript
// App.svelte
<script>
  ...
  import { getRandomImage, getBreedList, checkSub, getImageByBreed } from "./utils"
  ...
  const getImage = async (e) => {
    const { detail: { value } } = e
    let breedPath = ""

    if (value === "random") {
        image.src = await getRandomImage()
    } else {
        if (checkSub(value)) {
            const [sub, main] = value.split("-")

            breedPath = `${main}/${sub}`
        } else {
            breedPath = value
        }

        image.src = await getImageByBreed(breedPath)
    }
  }
  ...
  onMount(async () => {
    image.src = await getRandomImage()
    breedList = await getBreedList()
  })
</script>
<main>
	<h1>Dog image app</h1>
	<Input {breedList} on:submit={getImage} />
	<Image {image} />
</main>

```

In the code above, it will fetch the image based on the breed users selected and update the `src` property of `image` state. When the application mounted, we will get a random image. `on:submit` directive is the event listener for submit event. In the `getImage` event handler, you can see I retrieve `value` from `detail` property of event parameter instead of target as usual. This is because I forward submit event from `Input `component to `App` component. We will see how it works

```html
// Input.svelte
<script>
  ...
  import { createEventDispatcher } from "svelte"
  ...
  const dispatch = createEventDispatcher()
  const submit = () => {
    dispatch("submit", {
      value
    })
  }
  ...
</script>
<form on:submit|preventDefault={submit}>
  <select bind:value>
    <option value="random"></option>
    {#each formattedList as breed (breed.value)}
      <option value={breed.value}>{breed.label}</option>
    {/each}
  </select>
  <input type="submit" value="Get new image" />
</form>
```

We import `createEventDispatcher` from Svelte and create `dispatch` function. We call the `dispatch` function inside the submit event handler and pass the name of the event as the first argument and the value as the second argument. The `preventDefault` is the event modifier. We can chain modifiers together.

## Summary

In this post, I introduced to you some concepts of Svelte and how to use them to create a simple application. My post doesn't cover concepts like Stores, Transition and Slot. These concepts are useful when your application scales.

## Sources

Svelte document: <https://svelte.dev/docs>