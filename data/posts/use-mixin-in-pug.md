---
title: Use mixin in Pug
date: 2020-07-24T15:44:37.985Z
tag: pug
---

Pug allows you to reuse you elements with mixin. It is like a function, you can pass parameters and use them for attributes or value

```javascript
mixin pet(name)
  li.pet= name
ul
  +pet('cat')
  +pet('dog')
  +pet('pig')
/*
<ul>
  <li class="pet">cat</li>
  <li class="pet">dog</li>
  <li class="pet">pig</li>
</ul>
*/
```

I create a video if you prefer learning by waching

https://youtu.be/oP2oNHiUSpk
