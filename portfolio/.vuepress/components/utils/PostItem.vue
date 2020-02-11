<template>
  <div class="">
    <h1 class="">
      <router-link class="" :to="post.path">{{ post.title }}</router-link>
    </h1>
    <h3 class="">
      <router-link
        class=""
        :to="`/category.html#${post.frontmatter.category}`"
        >#{{ post.frontmatter.category }}</router-link
      >
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>
