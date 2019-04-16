<template>
  <section class="sidebar section has-background-black">
    <h4 class="title is-4">
      <router-link class="has-text-white" to="/">{{ $site.title }}</router-link>
    </h4>
    <p class="has-text-white">{{ $site.description }}</p>
    <hr>
    <div class="links">
      <p v-for="item in navItems" :key="item.link">
        <router-link :to="item.link">{{ item.text }}</router-link>
      </p>
    </div>
    <div class>
      <p
        class="has-text-white has-text-centered"
      >&copy; {{ new Date().getFullYear() }} - Phong Duong</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    navItems: function() {
      return this.$site.themeConfig.nav;
    }
  }
};
</script>


<style lang="scss" scoped>
.links {
  margin-bottom: 2em;
}
</style>

