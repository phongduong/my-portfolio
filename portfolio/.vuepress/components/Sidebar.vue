<template>
  <section class="sidebar section has-background-white">
    <h4 class="title is-4">
      <router-link class="has-text-dark" to="/">{{ $site.title }}</router-link>
    </h4>
    <p>{{ $site.description }}</p>
    <hr>
    <div class="links">
      <p v-for="item in navItems" :key="item.link">
        <router-link class="has-text-dark" :to="item.link">{{ item.text }}</router-link>
      </p>
    </div>
    <div class>
      <p class="has-text-centered">&copy; {{ new Date().getFullYear() }} - Phong Duong</p>
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

