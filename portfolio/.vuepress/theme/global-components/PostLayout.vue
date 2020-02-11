<template>
  <div class="post-layout">
    <h1 class="">{{ $page.frontmatter.title }}</h1>
    <h3 class="">
      <router-link class="" :to="`/category.html#${$page.frontmatter.category}`"
        >#{{ $page.frontmatter.category }}</router-link
      >
    </h3>
    <Content />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
