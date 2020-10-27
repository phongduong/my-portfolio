---
title: Toggle fullscreen mode with Fullscreen API
date: 2020-11-04T04:23:52.899Z
tag: webapi
---
Fullscreen API allows you to represent your application on the full screen. You can use it for your video player or game. 

## Check the browser's support

First, you need to check whether the full-screen mode is enabled first

```javascript
const fullscreenSupported = document.fullscreenEnabled;
```

It returns `false` if your browser doesn't support fullscreen mode or `fullscreen` feature is not allowed.

## Get the current fullscreen element

You can present any element in full-screen mode. To get the current element that is being represented in full-screen, you call `fullscreenElement` property of `document`

```javascript
document.fullscreenElement
```

It returns `null`, if the document is not in full-screen mode

## Turn on full-screen mode

Call `requestFullscreen()` of the element that you want present. It will return a `Promise` which is resolved after the full-screen mode is turned on. You check if 

```

```