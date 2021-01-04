---
title: Set required Node version for your application
date: 2021-01-07T07:53:34.122Z
tag: nodejs
---
You can require the Node version that your application will run on. You do that by specifying the `node` version in the `engines` property of your application's `package.json`.

```json
{ "engines" : { "node" : "14" } }
```

When you specify 14 for the `node` property like above, npm will require that the Node version running on your machine is 14. You can use the range of versions for this property.

You can also set the required version for Yarn and npm to specify which version will install your application.