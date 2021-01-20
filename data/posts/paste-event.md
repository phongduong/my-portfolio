---
title: Paste event
date: 2021-01-21T03:58:31.551Z
tag: javascript
---
`paste` event fires when the user pastes data on the web's interface.

```javascript
document.addEventListener('paste', (event) => {
});
```

You can access the pasted data by calling the `getData()` method on the event's `clipboardData` property.