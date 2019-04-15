<template>
  <main class="section is-main">
    <div class="container">
      <div class="columns">
        <section class="column is-9">
          <component :is="layout"/>
        </section>
        <section class="column is-3">
          <div class="section">
            <Sidebar/>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import bulma from "bulma";
import Sidebar from "../components/Sidebar.vue";
import HomeLayout from "./HomeLayout.vue";
import PostLayout from "./PostLayout.vue";

export default {
  components: {
    Sidebar,
    HomeLayout,
    PostLayout
  },
  data: function() {
    return {};
  },
  computed: {
    layout: function() {
      return this.$page.frontmatter.layout
    }
  }
};
</script>

<style lang="scss" scoped>
.is-main {
  background-image: linear-gradient(
    to left top,
    #00949c,
    #167da2,
    #4c6292,
    #654770,
    #663145
  );
}
</style>

