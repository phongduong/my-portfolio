---
title: Allow selecting multiple images with HTML
date: 2020-11-13T13:19:07.950Z
tag: html
---
When you use `input` element for selecting files, you can specify the file types and whether the user can select more than one file.

```html
<input type="file" accept="image/*" multiple />
```

If the user clicks the `input` element, the dialog will only show the image files and the user can select one or multiple files.