<template>
  <main class="">
    <Header />
    <component :is="layout" />
    <Footer />
  </main>
</template>

<script>
import Header from "../components/utils/Header.vue";
import Footer from "../components/utils/Footer.vue";
import HomeLayout from "./HomeLayout.vue";
import PostLayout from "./PostLayout.vue";
import CategoryLayout from "./CategoryLayout.vue";
import ContactLayout from "./ContactLayout.vue";
import ProjectsLayout from "./ProjectsLayout.vue";

export default {
  components: {
    Header,
    HomeLayout,
    PostLayout,
    CategoryLayout,
    ContactLayout,
    ProjectsLayout,
    Footer
  },
  computed: {
    layout: function() {
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
