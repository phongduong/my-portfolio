<template>
  <div class="section">
    <h2 class="title is-2">
      <router-link class="has-text-dark" :to="post.path">{{ post.title }}</router-link>
    </h2>
    <h5 class="subtitle is-5 has-text-grey">
      {{post.frontmatter.publish_date}} |
      <router-link
        class="has-text-grey"
        :to="`/category.html#${post.frontmatter.category}`"
      >{{ post.frontmatter.category }}</router-link>
    </h5>
    <p class="is-size-5">{{ post.frontmatter.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>
