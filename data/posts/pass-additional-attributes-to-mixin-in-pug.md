---
title: Pass additional attributes to mixin in Pug
description: If you need to pass some additional attributes to mixin in Pug,
  this tutorial will show you how
date: 2020-07-27T15:00:00.000Z
tag: pug
---
When you create a new mixin, you can get attributes from parameters. But these parameters are fixed and general, you can't pass additional attributes for different cases. Pug allow you to pass additional attributes to mixin using `&attributes`

```javascript
mixin link(href, name)
  a(href=href)&attributes(attributes)= name

+link('/foo', 'foo')(class="btn")
```