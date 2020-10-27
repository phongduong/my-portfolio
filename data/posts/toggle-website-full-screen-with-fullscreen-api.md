---
title: Toggle fullscreen with Fullscreen API
date: 2020-11-04T04:23:52.899Z
tag: webapi
---
Fullscreen API allows you to represent your application on the full screen. You can use it for your video player or game. 

## Check the browser's support

First, you need to check whether the full-screen mode is enabled first

```javascript
const fullscreenSupported = document.fullscreenEnabled;

console.log(fullscreenSupported)
```

It returns `false` if your browser doesn't support full-screen mode or your website doesn't allow `fullscreen` feature.

## Get the current full-screen element