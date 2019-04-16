<template>
  <div class="blog-layout section">
    <h1 class="title is-1 has-text-white">{{ $page.frontmatter.title }}</h1>
    <h5 class="subtitle is-5 has-text-grey-lighter">
      Published {{ $page.frontmatter.publish_date }} |
      <router-link
        class="has-text-grey-lighter"
        :to="`/category.html#${$page.frontmatter.category}`"
      >#️⃣{{ $page.frontmatter.category }}</router-link>
    </h5>
    <p class="is-size-4 has-text-white">{{ $page.frontmatter.description }}</p>
    <hr>
    <div class="is-size-5 has-text-white">
      <Content/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

