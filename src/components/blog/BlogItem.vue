<template>
  <article class="article">
    <div class="article__title">
      <g-link :to="post.node.path">
        <h2>
          {{ post.node.title }}
        </h2>
      </g-link>
    </div>
    <div class="article__date">
      <p>{{ post.node.date }}</p>
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
  @apply mb-6;

  p {
    @apply my-2 text-gray-800;
  }

  @screen sm {
    @apply grid grid-cols-4;

    &__title {
      @apply col-span-3;
    }
  }
}
</style>
