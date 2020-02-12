<template>
  <main class="global-layout container mx-auto my-4 px-2">
    <Header />
    <component class="my-10" :is="layout" />
    <Footer />
  </main>
</template>

<script>
export default {
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout;
        }

        return "Layout";
      }

      return "NotFound";
    }
  }
};
</script>

<style lang="scss">
@tailwind base;

ul,
ol {
  @apply list-inside pl-10 my-4;
}

.post-layout,
.other-layout {
  a {
    @apply text-primary underline;
  }
}

.post-layout {
  ul {
    @apply list-disc;
  }

  ol {
    @apply list-decimal;
  }

  img {
    @apply w-1/4 my-4 mx-auto;
  }

  p {
    @apply text-lg
  }
}

@tailwind components;
@tailwind utilities;
</style>
