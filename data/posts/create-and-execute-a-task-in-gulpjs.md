---
title: Create and execute a task in Gulpjs
description: Task is the main concept of Gulpjs. Everything you do in Gulpjs is
  create tasks and execute them
date: 2020-09-18T07:32:30.940Z
tag: gulpjs
---
A task is an asynchronous JS function. It has 2 types public tasks and private tasks. 

Public tasks: tasks that you export from gulpfile and run in gulp command

Private tasks: tasks that you don't export from gulpfile. You use them in `serires()` and `parallel()` function

**Note:** One thing to remember that Gulpjs doesn't support synchronous function. If you return something in your task, it must be stream, promise, event emitter, child process or observable. If you don't return any, you must call the `callback` function to signal completion. The `callback` function is passed to your task as the argument.

In the `gulpfile.js`, you write a function and export it as default

```javascript
function greet(cb) {
  console.log("Hi")
  return Promise.resolve()
}

exports.default = greet;

```

Run `gulp` command

```
gulp
```

It will exit and print `Hi`  and the information about your task

```
[19:24:29] Using gulpfile F:\app\gulptest\gulpfile.js
[19:24:29] Starting 'default'...
Hi
[19:24:29] Finished 'default' after 5.1 ms
```