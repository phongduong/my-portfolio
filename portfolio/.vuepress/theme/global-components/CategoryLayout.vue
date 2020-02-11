<template>
  <div class="category-layout">
    <h1 class="">Category: {{ $route.hash.split("#")[1] }}</h1>
    <Content />
  </div>
</template>

<script>
export default {};
</script>
