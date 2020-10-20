---
title: Create and execute a task in Gulpjs
date: 2020-09-18T07:32:30.940Z
tag: gulpjs
---

A task is an asynchronous JS function. It has 2 types: public tasks and private tasks.

Public tasks: tasks that you export from gulpfile and run in gulp command

Private tasks: tasks that you don't export from gulpfile. You can use them in `serires()` and `parallel()` functions

**Note:** One thing to remember that Gulpjs doesn't support synchronous function. If you return something in your task, it must be stream, promise, event emitter, child process or observable. If you don't return anything, you must call the `callback` function to signal completion. The `callback` function is passed to your task as the argument.

In the `gulpfile.js`, you write a function and export it as default

```javascript
function greet(cb) {
  console.log("Hi");
  return Promise.resolve();
}

exports.default = greet;
```

Run `gulp` command

```
gulp
```

It will exit, print `Hi` and the information about your task

```
[19:24:29] Using gulpfile F:\app\gulptest\gulpfile.js
[19:24:29] Starting 'default'...
Hi
[19:24:29] Finished 'default' after 5.1 ms
```
