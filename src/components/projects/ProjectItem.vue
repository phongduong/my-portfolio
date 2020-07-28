<template>
  <div class="project">
    <h2>
      <Link class="project__title" :to="project.url">
        {{ project.name }}
      </Link>
      <span class="project__description">
        {{ project.description }}
      </span>
    </h2>
  </div>
</template>

<script>
import Link from "~/components/layout/Link.vue";

export default {
  props: ["project"],
  components: {
    Link,
  },
};
</script>

<style lang="scss" scoped>
.project {
  @apply mb-4 flex;

  &__title {
    @apply text-2xl;
  }

  &__description {
    @apply ml-2 text-lg;
  }
}
</style>
