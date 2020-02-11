<template>
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
export default {
  computed: {
    posts: function() {
      return this.$site.pages
        .filter(page => `#${page.frontmatter.category}` === this.$route.hash)
        .filter(
          page =>
            new Date(page.frontmatter.publish_date).getTime() <=
            new Date().getTime()
        );
    }
  }
};
</script>
