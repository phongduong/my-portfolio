<template>
  <div>
    <PostItem v-for="post in posts" :post="post" :key="post.key"/>
  </div>
</template>

<script>
import PostItem from "../utils/PostItem.vue";

export default {
  components: { PostItem },
  data: function() {
    return {
      posts: []
    };
  },
  mounted: function() {
    this.posts = this.$site.pages.filter(page =>
      page.path.startsWith("/blogs/")
    );
  }
};
</script>
