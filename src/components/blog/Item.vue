<template>
  <li>
    <g-link :to="postInfo.path">{{ postInfo.title }}</g-link>
  </li>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    postInfo() {
      return this.post.node;
    },
  }
};
</script>

<style></style>
