<template>
  <header class="header">
    <h1 class="header-brand text-5xl text-primary">
      <router-link class="" to="/">{{ $site.title }}</router-link>
    </h1>
    <h3 class="my-4 text-lg">{{ $site.description }}</h3>
    <div class="header-links flex justify-around">
      <p class="text-primary underline text text-xl" v-for="(item, i) in $site.themeConfig.nav" :key="i">
        <router-link class="" :to="item.link">{{ item.text }}</router-link>
      </p>
    </div>
  </header>
</template>
