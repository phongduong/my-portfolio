---
title: Run Node.js commands concurrently
date: 2021-01-15T06:55:40.550Z
tag: nodejs
---
If you are developing an application, you may be running commands using operators like this `"npm run develop && npm run start"` or in separate terminals. This is normal but when you have more commands to run than these, it is really cumbersome.

``[`concurrently`](https://www.npmjs.com/package/concurrently) library will help you solve this problem. You can install it globally 

```
npm install -g concurrently

```

or locally and use from `npm` scripts

```
npm install --save concurrently 

```

After installing, you can use it to run commands above like this

```
concurrently "npm run develop" "npm run start"

```

It looks prettier now.

One thing to note that commands are surrounded with quotes. When you use them from `npm` scripts, you need to escape the quotes

```json
{
  "scripts": {
     "start": "concurrently \"npm run develop\" \"npm run start\"
"
  }
}
```

 You can also shorten the commands with `yarn` or `npm`.

```
concurrently "npm:develop" "npm:start"

```

One thing I like about [`concurrently`](https://www.npmjs.com/package/concurrently) is that you can kill other processes if one process fails. To do that, you pass `--kill-others (-k)` option to the command.

```
concurrently -k "npm run develop" "npm run start"

```

You can find more options [here](https://www.npmjs.com/package/concurrently#usage)