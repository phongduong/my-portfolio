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

## Development

Inside the `src` folder, you can see two file `App.svelte` and `main.js`



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

We need a component the receives `image` state as property and display the image source. You create a new file named `Image.svelte` and define a property named `image` export . 

```javascript
<script>
  export let image
</script>
```

You may wonder how I name variables with a same name. I will explain later in this tutorial