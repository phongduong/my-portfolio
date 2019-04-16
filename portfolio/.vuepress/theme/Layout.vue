<template>
  <main class="is-main">
    <div class="container">
      <div class="columns">
        <section class="column is-8">
          <component :is="layout"/>
        </section>
        <section class="column is-4">
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
import CategoryLayout from "./CategoryLayout.vue";

export default {
  components: {
    Sidebar,
    HomeLayout,
    PostLayout,
    CategoryLayout
  },
  data: function() {
    return {};
  },
  computed: {
    layout: function() {
      console.log(this.$site)
      return this.$page.frontmatter.layout;
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

