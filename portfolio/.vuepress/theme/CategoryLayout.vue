<template>
  <div class="category-layout">
    <div class="section">
      <h1 class="title is-1">Category: {{ $route.hash.split("#")[1] }}</h1>
    </div>
    <Content/>
  </div>
</template>

<script>
export default {};
</script>
