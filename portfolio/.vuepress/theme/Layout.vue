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
import Sidebar from "../components/Sidebar.vue";
import HomeLayout from "./HomeLayout.vue";
import PostLayout from "./PostLayout.vue";
import TagLayout from "./TagLayout.vue";

export default {
  components: {
    Sidebar,
    HomeLayout,
    PostLayout,
    TagLayout
  },
  data: function() {
    return {};
  },
  computed: {
    layout: function() {
      return this.$page.frontmatter.layout || "PostLayout";
    }
  }
};
</script>

<style lang="scss">
@charset "utf-8";

.blog-layout,
.sidebar {
  a {
    color: #fff;
  }
}

@import "~bulma";

.is-main {
  background-image: linear-gradient(
    to bottom,
    #663145,
    #583d61,
    #3a4b71,
    #105771,
    #0c5f64
  );
}
</style>

