---
title: Get all supported HTTP methods with Nodejs
date: 2020-12-09T14:56:05.514Z
tag: nodejs
---
To get all HTTP methods that are supported by NodeJS, you can retrieve `METHODS` property of `http` module.  It will return an array with all sorted methods.

```javascript
console.log(require("http").METHODS)
/*
[
  'ACL',         'BIND',       'CHECKOUT',
  'CONNECT',     'COPY',       'DELETE',
  'GET',         'HEAD',       'LINK',
  'LOCK',        'M-SEARCH',   'MERGE',
  'MKACTIVITY',  'MKCALENDAR', 'MKCOL',
  'MOVE',        'NOTIFY',     'OPTIONS',
  'PATCH',       'POST',       'PROPFIND',
  'PROPPATCH',   'PURGE',      'PUT',
  'REBIND',      'REPORT',     'SEARCH',
  'SOURCE',      'SUBSCRIBE',  'TRACE',
  'UNBIND',      'UNLINK',     'UNLOCK',
  'UNSUBSCRIBE'
]
*/
```