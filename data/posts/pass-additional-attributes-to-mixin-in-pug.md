---
title: Pass additional attributes to mixin in Pug
date: 2020-07-27T15:00:00.000Z
tag: pug
---

When you create a new mixin, you can get attributes from parameters. But these parameters are fixed and general, you can't pass additional attributes for different cases. Pug allow you to pass additional attributes to mixin using `&attributes`

```javascript
mixin link(href, name)
  a(href=href)&attributes(attributes)= name

+link('/foo', 'foo')(class="btn")
```

If you prefer learning by watching video, you can watch this tutorial here

https://youtu.be/o4wXnyHgO28
