<template>
  <header class="">
    <h1 class="">
      <router-link class="" to="/">{{ $site.title }}</router-link>
    </h1>
    <p>{{ $site.description }}</p>
    <div class="">
      <p v-for="item in navItems" :key="item.link">
        <router-link class="" :to="item.link">{{ item.text }}</router-link>
      </p>
    </div>
  </header>
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

<style lang="scss" scoped></style>
