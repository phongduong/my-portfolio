---
title: Get HTTP status codes and description with Node.js
date: 2021-02-03T04:37:38.430Z
tag: nodejs
---
To get all HTTP status codes and their descriptions with Node.js, you get the `STATUS_CODES` property of the `http` module.

```javascript
require("http").STATUS_CODES
/*
  {
    '100': 'Continue',
    '101': 'Switching Protocols',
    '102': 'Processing',
    '103': 'Early Hints',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    ...
  }
*/
```

This property contains an object of status codes and descriptions.