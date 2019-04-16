<template>
  <div>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from "../utils/PostList.vue";

export default {
  components: { PostList },
  data: function() {
    return {};
  },
  computed: {
    posts: function() {
      return this.$site.pages.filter(page => page.path.startsWith("/posts/"));
    }
  },
};
</script>
