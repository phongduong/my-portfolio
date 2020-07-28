<template>
  <section>
    <h1>{{ title }}</h1>
    <slot />
    <p>
      <g-link :to="link">View all</g-link>
    </p>
  </section>
</template>

<script>
export default {
  props: ["title", "link"],
};
</script>

<style lang="scss" scoped>
section {
  @apply my-8;

  h1 {
    @apply my-6;
  }

  p {
    @apply text-right;
  }
}
</style>
