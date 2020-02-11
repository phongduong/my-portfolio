<template>
  <div>
    <PostItem v-for="post in sortedByDatePosts" :post="post" :key="post.key"/>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  props: {
    posts: Array
  },
  components: { PostItem },
  computed: {
    sortedByDatePosts: function() {
      return this.posts.sort((pre, cur) => {
        const curPublishDate = new Date(cur.frontmatter.publish_date).getTime();
        const prePublishDate = new Date(pre.frontmatter.publish_date).getTime();

        if (prePublishDate > curPublishDate) return -1;

        if (prePublishDate < curPublishDate) return 1;

        return 0;
      });
    }
  }
};
</script>

