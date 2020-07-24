---
title: Tag interpolation in Pug
description: Learn how to use tag interpolation inside text of Pug
date: 2020-07-22T15:30:32.226Z
tag: pug
---
Pug not only allows you to use string interpolation but also tag interpolation. It is a convenient feature if you want use a tag inside text of your tag

```javascript
p.
  This is a very long and boring paragraph that spans multiple lines.
  Suddenly there is a #[strong strongly worded phrase] that cannot be
  #[em ignored].
/*
<p>This is a very long and boring paragraph that spans multiple lines.
  Suddenly there is a <strong>strongly worded phrase</strong> that cannot be
  <em>ignored</em>.</p>
*/
```

I create a video if you prefer learning by watching <https://youtu.be/1OzYYpyVkfs>