<template>
  <main class="is-main">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-9">
            <div class="has-background-white">
              <component :is="layout"/>
            </div>
          </div>
          <div class="column is-3">
            <Sidebar/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import HomeLayout from "./HomeLayout.vue";
import PostLayout from "./PostLayout.vue";
import CategoryLayout from "./CategoryLayout.vue";
import ContactLayout from "./ContactLayout.vue";
import ProjectsLayout from "./ProjectsLayout.vue";

export default {
  components: {
    Sidebar,
    HomeLayout,
    PostLayout,
    CategoryLayout,
    ContactLayout,
    ProjectsLayout
  },
  data: function() {
    return {};
  },
  computed: {
    layout: function() {
      return this.$page.frontmatter.layout;
    }
  }
};
</script>

<style lang="scss">
@charset "utf-8";
@import "~bulma";

.is-main {
  min-height: 100vh;
  background: #00949c;
}
</style>

