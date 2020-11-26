<template>
  <article class="article">
    <div class="article__title">
      <g-link :to="post.node.path">
        <h2>
          {{ post.node.title }}
        </h2>
      </g-link>
    </div>
    <div class="article__info">
      <p>
        {{ post.node.date }} |
        <g-link :to="post.node.tag.path"> #{{ post.node.tag.title }} </g-link>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.article {
  @apply mb-8;

  p {
    @apply my-4 text-gray-800;
  }
}
</style>
