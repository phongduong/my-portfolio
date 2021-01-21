---
title: Retrieve query with Vue Router
date: 2021-01-29T12:31:21.221Z
tag: vuejs
---
You can retrieve the URL's query from the component by using `$route.query`. 

It returns an object of query values. The object's property is the queries and the value is the queries values.

I have a URL's query like below

```
/search?title=text&description=hello
```

`$route.query` return the following object

```javascript
$route.query
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