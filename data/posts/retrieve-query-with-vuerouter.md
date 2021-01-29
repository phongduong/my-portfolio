---
title: Retrieve query with Vue Router
date: 2021-02-11T12:31:21.221Z
tag: vuejs
---
You can retrieve the URL's query from the component by using `$route.query`. 

It returns an object of query values. The object's properties are the queries and the values are the queries values.

I have a URL query like below

```
/search?title=text&description=hello
```

`$route.query` returns the following object

```javascript
route.query
/*
{
  title: "text",
  description: "hello"
}
*/
```

You can also pass the query as the `props` to the component.

When you create the router instance, you pass the `props` property to your route 

```javascript
const routes = [
  { path: "/search", component: Search, props: (route) => ({ query: route.query }) }
];

```

Now you can retrieve the query by using `$props` in your component.

```javascript
$props.query
/*
{
  title: "text",
  description: "hello"
}
*/
```

Here is the demo. You can check the result in the `console` tab

<iframe src="https://codesandbox.io/embed/purple-cache-vtsci?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="purple-cache-vtsci"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>