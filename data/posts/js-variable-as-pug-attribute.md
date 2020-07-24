---
title: JS variable as Pug attribute
description: Learn how to use JS variable as Pug attribute
date: 2020-07-21T15:24:46.425Z
tag: pug
---
You can use JS variables directly as a Pug attribute. You only need to put the variable after your attribute

```javascript
- url = 'https://example.com/'
a(href=url) Another link
/*
<a href="https://example.com/">Another link</a>
*/
```

I create a video if you prefer learning by watching <https://youtu.be/myv8ktOJuJI>