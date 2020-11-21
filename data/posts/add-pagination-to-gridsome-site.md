---
title: Add the pagination on Gridsome site
date: 2020-11-20T13:54:52.885Z
tag: gridsome
---
To add the pagination for the site, you use `@paginate` in your GraphQL query. The query will receive a `$page: Int` parameter. The default number of nodes per page is 25. 

```
<page-query>
query ($page: Int) {
  allPost(page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    ...
  }
}
</page-query>
```

Gridsome provides a `Pager` component for pagination. You import the component from `gridsome` and place it in your template. It requires a page's `info` property. This property is an object that 2 properties: `totalPages` and `currentPage`. You can get these 2 properties from `pageInfo` of your query.

```
<template>
  <Layout>
    <Pager 
      :info="$page.allPost.pageInfo" 
      :showNavigation="false" 
      range="10"
      linkClass="pager-link"
     />
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>

<page-query>
query ($page: Int) {
  allPost(page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    ...
  }
}
</page-query>
```

You can also customize the `Pager` component's properties like show links and navigation, the number of links to show, or the custom class of links for styling.