---
title: Toggle fullscreen mode with Fullscreen API
date: 2020-11-04T04:23:52.899Z
tag: webapi
---

Fullscreen API allows you to represent your application on the full screen. You can use it for your video player or game.

In this tutorial, we want to present the page in the full-screen mode by clicking turn on button

```html
<h1>Fullscreen API</h1>
<button id="on">Turn on fullscreen</button>
<button id="off">Turn off fullscreen</button>
```

## Check the mode is supported

First, you need to check whether the full-screen mode is supported first

```javascript
const fullscreenSupported = document.fullscreenEnabled;
```

It returns `false` if your browser doesn't support the full-screen mode or `fullscreen` feature is not allowed.

If the full-screen mode is not supported, you should show a notification for the user

```javascript
if (!fullscreenSupported) {
  const para = document.createElement("p");
  para.textContent = "Full screen mode is not supported";
  document.body.appendChild(para);
  onButton.style.display = "none";
  offButton.style.display = "none";
}
```

## Get the current fullscreen element

You can present any element in full-screen mode. To get the current element that is being represented in full-screen, you call `fullscreenElement` property of `document`

```javascript
document.fullscreenElement;
```

It returns `null`, if the document is not in full-screen mode

## Turn on full-screen mode

You listen to the click event in the turn on button. In the event handler, you call `requestFullscreen()` of the element that you want present. It will return a `Promise` which is resolved after the full-screen mode is turned on. You need to check if the full-screen mode is supported and the mode is off.

```javascript
const onButton = document.getElementById("on");

onButton.addEventListener("click", () => {
  if (fullscreenSupported && !document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
});
```

## Turn off full-screen mode

To turn off the full-screen mode, you listen to the click event of the turn off button. In the event handler, you call the `exitFullscreen()` method of `document`. It returns a `Promise` that is resolved after the mode is off. You need to check whether the mode is supported and the mode is on.

```javascript
const offButton = document.getElementById("off");

offButton.addEventListener("click", () => {
  if (fullscreenSupported && document.fullscreenElement) {
    document.exitFullscreen();
  }
});
```

This is the Codepen demo for the tutorial

https://codepen.io/phongduong/pen/JjKNPKx
