<template>
  <main>
    <ul>
      <Item v-for="post in posts" :post="post" :key="post.id" />
    </ul>
  </main>
</template>

<script>
import Item from "~/components/blog/Item.vue";

export default {
  components: {
    Item,
  },
  computed: {
    posts() {
      return this.$page.posts.edges;
    },
  },
};
</script>

<page-query>
  query {
    posts: allBlogPost {
      edges {
        node {
          id
          path
          content
          excerpt
          title
          description
          date
          tag
        }
      }
    }
  }
</page-query>

<style></style>
