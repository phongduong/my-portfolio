---
title: Alert when user leaves the web page
date: 2020-11-05T14:41:59.431Z
tag: webapi
---
To know when users leave the web page, you listen to `beforeunload`**.** This event is fired before the `window` is unloaded. 

 It is because of the browser's support. In the event handler, you can call `preventDefault()` on the event, assign a string to the event's `returnValue` property and return a string. You can combine these methods if your web page runs on multiple browsers.

```javascript
window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';
});
```

When the user tries to leave the page like refreshing, closing the tab, or going back, it is going to show a confirm dialog.