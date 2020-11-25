---
title: Custom selected text style
date: 2020-11-25T14:52:22.132Z
tag: css
---
To custom selected text style, you custom the style of `::selection` pseudo element. You can custom these properties with `::selection`:

* `color`
* `background-color`
* `text-shadow`

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Duis lacinia varius quam, ut posuere tellus rhoncus et. 
  Donec tristique malesuada mi, sed scelerisque augue dapibus nec. 
  Integer sollicitudin nec mauris in lobortis. 
  Nam vitae ligula massa. Nulla id commodo tortor, at venenatis ipsum. 
  Sed sagittis, nibh non dapibus bibendum, justo ligula imperdiet augue, lacinia ultrices sem purus et erat. 
  Nam tempus dui diam, vitae sollicitudin turpis fringilla id. 
  Morbi condimentum consectetur pulvinar. 
  Donec pharetra ullamcorper leo vel mollis. 
  In at nulla facilisis, imperdiet risus at, varius mauris. 
  Integer nec diam at nisi efficitur hendrerit ut sed enim.  
</p>
```

```css
p::selection {
	background: #02fe6a;
	color: black;
	text-shadow: red 2px 5px;
}
```

When you select text in the paragraph, it will show green background, black text and red shadow

![Selected text style](/uploads/selection_image.png "Selected text style")

You can apply the style for the entire page by using just the `::selection` pseudo element. 

```javascript
::selection {
	background: #02fe6a;
	color: black;
	text-shadow: red 2px 5px;
}
```

When you select any text, it will show the style above. You should use this pseudo element with care because it could be hard for people with low vision conditions to read the text.