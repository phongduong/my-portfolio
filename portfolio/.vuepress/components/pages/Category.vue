<template>
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../utils/PostList";

export default {
  components: {
    PostList
  },
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
