---
title: Create collections from API with Gridsome
date: 2020-10-29T14:38:33.520Z
tag: gridsome
---
Gridsome provides many source plugins that help you create collections from your source. But if you want to create collections from your API or a third-party API, you have to create collections manually. 

In `gridsome.server.js` file, you call `loadSource` method of `api` parameter. You pass a callback function which you will fetch the API and create collections from data.

Your callback has an `actions` parameter, it has `addCollection` method. You will use this method to create your collections

```javascript
const axios = require("axios")

module.exports = function(api) {
  api.loadSource(actions) => {
    const { data } = await axios.get('https://example.com/api/v1/posts')
    const postCollection = actions.addCollection("Post")
    
    for(const post of data) {
      postCollection.addNode({
        id: post.id,
        title: post.title
      })
    }
  }
};
```

After you start the server, it will create `Post` collection. To get the collection, you call `getCollection` method with the collection's name

```javascript
actions.getCollection("Post")

```