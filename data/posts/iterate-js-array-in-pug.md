---
title: Iterate JS array in Pug
description: Learn how to use each method to iterate through a JS array
date: 2020-07-20T15:16:00.941Z
tag: pug
---

If you want to iterate through an JS array in Pug and create template elements, you can use each block to do that.

```javascript
ul
  each val in [1, 2, 3, 4, 5]
    li= val
/*
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
*/
```

Pug also allows you to get the index of the element

```javascript
ul
  each val, index in ['zero', 'one', 'two']
    li= index + ': ' + val
/*
<ul>
  <li>0: zero</li>
  <li>1: one</li>
  <li>2: two</li>
</ul>
*/
```

If the array empty, you can use the else block without checking the length of the array

```javascript
- var values = [];
ul
  each val in values
    li= val
  else
    li There are no values
 /*
 <ul>
  <li>There are no values</li>
</ul>
*/
```

I create a video if you prefer learning by watching

https://youtu.be/KwQX7V37DRA
