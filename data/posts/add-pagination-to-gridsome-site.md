---
title: Add the pagination to Gridsome site
date: 2020-11-18T13:54:52.885Z
tag: gridsome
---
To add the pagination to the site, you use `@paginate` in your GraphQL query. The query will receive a `$page: Int` parameter. The default number of nodes per page is 25. 

Gridsome provides a `Pager` component for pagination. You import the component from `gridsome` and place it in your template. It requires an `info` property. This property is an object that 2 properties: `totalPages` and `currentPage`. You can get these 2 properties from `pageInfo` of your query.

You can pass page