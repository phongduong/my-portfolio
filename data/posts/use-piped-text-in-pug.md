---
title: Use piped text in Pug
description: You can use plain text in multiple lines inside of a tag with piped text
date: 2020-10-08T12:57:06.526Z
tag: pug
---
In your tag, you use pipe character (`|`) in the new line and indent it to add plain text in multiple lines. 

```pug
p 
  | This is
  | piped text.
  |	This is another
  |	piped text
  
 // Result: This is piped text. This is another piped text
```

Pug adds a space after every piped text without adding manually. But if you add an inline text after your tag, you need to add the space manually

```pug
p This is an inline text without space.
  | This is
  | piped text.
  |	This is another
  |	piped text
p This is an inline text with space. 
  | This is
  | piped text.
  |	This is another
  |	piped text

// Result
// This is an inline text without space.This is piped text. This is another piped text
// This is an inline text with space. This is piped text. This is another piped text
```