<template>
  <div class="sidebar">
    <h4 class="title is-4">
      <router-link class="has-text-white" to="/">{{ $site.title }}</router-link>
    </h4>
    <p class="has-text-white">{{ $site.description }}</p>
    <hr>
    <div class="links">
      <p>
        <router-link to="/">📰 Blog</router-link>
      </p>
      <p>
        <router-link to="/about">👾 About me</router-link>
      </p>
      <p>
        <router-link to="/projects">📦 Projects</router-link>
      </p>
      <p>
        <router-link to="/contact">📞 Contact</router-link>
      </p>
    </div>
    <div class="">
      <p class="has-text-white has-text-centered">&copy; {{ new Date().getFullYear() }} - Phong Duong</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  margin-bottom: 2em
}
</style>

