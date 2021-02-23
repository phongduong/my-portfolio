---
title: "Parse command-line arguments in Node.js "
date: 2021-03-10T07:33:55.881Z
tag: nodejs
---
When you run your Javascript file with Node.js, you can pass the arguments to your command like this.

```
node index.js foo bar baz
```

You can also parse these arguments in `index.js` file. All arguments that you pass to the command are given to the `process` in an array called `argv`.

```javascript
console.log(process.argv)
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\app\\my-portfolio\\index.js',    
  'foo',
  'bar',
  'baz'
]
*/
```

The first two elements are `node` and the path to your Javascript file. These arguments will always be present in the array even if you don't pass any arguments.

```
node index.js
```

```javascript
console.log(process.argv)
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\app\\my-portfolio\\index.js'
]
*/
```