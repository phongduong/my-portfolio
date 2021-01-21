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

You can also pass the query as the `props` to the component. This allows you to reuse it for different URLs.

When you create the router instance

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/search',
      component: Search,
      props: true
    }
  ]
})
```

Now you can retrieve the