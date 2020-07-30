---
title: Use mixin block in Pug
description: Extend your mixin elements with block keyword
date: 2020-07-29T15:00:00.000Z
tag: pug
---
When using mixin, you can define your elements generally for all use cases. In some specific cases, you need to pass more elements. Pug allows you to do that with `block` keyword. You can conditionally render elements by checking the `block` variable. When you append new elements inside your mixin call, the `block` variable is truthy. 

```javascript
mixin article(title)
  .article
    .article-wrapper
      h1= title
      if block
        block
      else
        p No content provided

// Use mixin without passing new elements
+article('Hello world')
/*
<div class="article">
  <div class="article-wrapper">
    <h1>Hello world</h1>
    <p>No content provided</p>
  </div>
</div>        
*/

// Use mixin with new elements
+article('Hello world')
  p This is my
  p Amazing article
/*
<div class="article">
  <div class="article-wrapper">
    <h1>Hello world</h1>
    <p>This is my</p>
    <p>Amazing article</p>
  </div>
</div>
*/
```

I also create a video if you prefer learning by watching <https://youtu.be/LgxIfONhxDI>