<template>
  <div class="section box">
    <h2 class="is-2 title">
      <a :href="post.path">{{ post.title }}</a>
    </h2>
    <h3 class="is-3 subtitle">{{post.frontmatter.publish_date}} | <a :href="`/tag/`"</h3>
    <p>{{ post.frontmatter.description }}</p>
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
