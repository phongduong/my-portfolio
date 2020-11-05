<template>
  <div class="project">
    <h2>
      <a class="project__title" :href="project.url">
        {{ project.name }}
      </a>
      <span class="project__description">
        {{ project.description }}
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  props: ["project"],
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
