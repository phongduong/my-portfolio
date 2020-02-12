<template>
  <div class="post-item my-4">
    <h1 class="text-3xl hover:text-primary hover:underline">
      <router-link :to="post.regularPath">{{ post.title }}</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>
