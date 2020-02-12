<template>
  <div class="post-list">
    <PostItem v-for="(post, i) in posts" :post="post" :key="i" />
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  }
};
</script>
