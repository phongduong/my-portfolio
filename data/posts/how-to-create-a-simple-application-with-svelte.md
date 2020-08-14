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

Our application needs to allow users to select the dog breed they want or we can fetch random images. You create an Input component and define a state with default value.

```html
<script>
  let value = "random"
</script>
<form>
  <select bind:value>
    <option value="random"></option>
  </select>
  <input type="submit" value="Get new image" />
</form>
```

As you can see, we can bind state to the element's value attribute using `bind:value` directive. You don't need to create event handler for onInput event and update the state. This directive is equivalent to