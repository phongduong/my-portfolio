<template>
  <main class="">
    <Header />
    <component :is="layout" />
    <Footer />
  </main>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$page.frontmatter.layout;
    }
  }
};
</script>

<style lang="scss">
:root {
  --main-color: #00949c;
}
</style>
