<template>
  <div class="section box">
    <h2 class="title is-2">
      <a :href="post.path">{{ post.title }}</a>
    </h2>
    <h5 class="subtitle has-text-grey-light">
      {{post.frontmatter.publish_date}} |
      <a class="has-text-grey-light"
        :href="`/tag/${post.frontmatter.tag}`"
      >#{{ post.frontmatter.tag }}</a>
    </h5>
    <p class="has-text-dark is-size-5">{{ post.frontmatter.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  mounted: function() {
    console.log(this.post);
  }
};
</script>
