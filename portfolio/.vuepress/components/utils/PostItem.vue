<template>
  <div class="section box">
    <h2 class="title is-2">
      <router-link class="has-text-dark" :to="post.path">{{ post.title }}</router-link>
    </h2>
    <h5 class="subtitle has-text-grey-light">
      {{post.frontmatter.publish_date}} |
      <router-link
        class="has-text-grey-light"
        :to="`/tag/${post.frontmatter.tag}`"
      >#{{ post.frontmatter.tag }}</router-link>
    </h5>
    <p class="is-size-5">{{ post.frontmatter.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  mounted: function() {}
};
</script>
