<template>
  <div>
    <h1>{{ this.post.title }}</h1>
    <h2>{{ this.post.description }}</h2>
    <h3>{{ this.post.date }}</h3>
    <g-link :to="`blog/tag/${post.tag}`">{{ this.post.tag }}</g-link>
    <div v-html="this.post.content"></div>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$page.post;
    },
  },
};
</script>

<page-query>
  query ($id: ID!) {
    post: blogPost(id: $id) {
      id
      path
      content
      title
      description
      date
      tag
    }
  }
</page-query>

<style></style>
