---
title: Unregister service worker
date: 2021-03-05T06:25:36.115Z
tag: javascript
---
There are 2 ways to unregister a service worker:

## Programmatically unregister

You call [`getRegistrations()`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/getRegistrations) method of `navigator.serviceWorker` object. The method returns a Promise that resolves to an array of registrations.

Each of the registration objects has an `unregister()` method. 

```javascript
navigator.serviceWorker.getRegistrations().then(function(registrations) {
 for(const registration of registrations) {
  registration.unregister()
} })
```

## Through the user interface

You can unregister the service worker in the `Service Workers` section of the `Application` tab in Chrome Devtools

![Removing service workers through the user interface](/uploads/unregister.png "Removing service workers through the user interface")