<template>
  <div class="post-layout section">
    <h1 class="title is-1">{{ $page.frontmatter.title }}</h1>
    <h5 class="subtitle is-5 has-text-grey">
      Published {{ $page.frontmatter.publish_date }} |
      <router-link
        class="has-text-grey"
        :to="`/category.html#${$page.frontmatter.category}`"
      >{{ $page.frontmatter.category }}</router-link>
    </h5>
    <p class="is-size-4">{{ $page.frontmatter.description }}</p>
    <hr>
    <div class="is-size-5">
      <Content/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

