<template>
  <div class="projects-layout">
    <section class="section">
      <h1 class="title is-1 has-text-centered">Projects I worked on</h1>
      <Content/>
    </section>
  </div>
</template>

<script>
export default {
  mounted: function() {
    console.log(this.$page)
  }
}
</script>
