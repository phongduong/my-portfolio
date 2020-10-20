---
title: Override mixin attributes in Pug
date: 2020-07-28T15:00:00.000Z
tag: pug
---

When you create a mixin in Pug, you usually use a default attribute value for all cases generally. Pug has an ability allowing you to override and change your default attributes. With `&attributes`, you can pass new attributes for specific cases and override default attributes

```javascript
mixin inputField(type, id)
  input(id=id, type=type, required)&attributes(attributes)

+inputField("text", "name")
/*
<input id="name" type="text" required />
*/

// Override required attribute
+inputField("number", "age")(required=false)
/*
<input id="age" type="number" />
*/
```

If you prefer learning by watching video, you can watch this tutorial

https://youtu.be/ws2Ff_ESXic
