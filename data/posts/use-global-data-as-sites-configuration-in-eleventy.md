---
title: Use global data as site's configuration in Eleventy
date: 2020-10-07T07:41:56.450Z
tag: eleventy
---

I have used Gridsome and Vuepress for my static sites. I liked them a lot. I want to try Eleventy for my CSS library document. It's simple and easy to use. But its configuration file is only for how the data and templates are processed. It doesn't provide configuration for the information about my site. This is cumbersome if you have many layouts. It is hard to manage information.

Luckily, Eleventy lets you define your data and access it from templates. In this tutorial, I will show you how to use global data to set your site's configuration

In your global data directory, you create a file named `siteConfig.json`. This file contains your site information like below

```json
{
  "title": "Phong Duong",
  "description": "Hi, I am Phong Duong. I am a developer. I like learning and creating new things",
  "keywords": "javascript, programming tutorials",
  "author": "Phong Duong"
}
```

In your template, you can access this information by specifying the property `siteConfig.*` in any template you need. Below is the example in Pug

```pug
doctype html

html
  head
    title= siteConfig.title
    meta(name="description" content=siteConfig.description)
    meta(name="keywords" content=siteConfig.keywords)
    meta(name="author" content=siteConfig.author)
```

If you want to use Javascript, you export an object

```javascript
module.exports = {
  title: "Phong Duong",
  description:
    "Hi, I am Phong Duong. I am a developer. I like learning and creating new things",
  keywords: "javascript, programming tutorials",
  author: "Phong Duong",
};
```

Eleventy allows you to export a variety of values in Javascript. You can read more in the document

[Global data files](https://www.11ty.dev/docs/data-global/)

[Javascript data files](https://www.11ty.dev/docs/data-js/)
