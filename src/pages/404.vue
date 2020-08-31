<template>
  <div class="container-404">
    <h1>404 - not found</h1>
    <p>
      <g-link to="/"> Back to home </g-link>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container-404 {
  @apply flex flex-col justify-center items-center w-screen h-screen;

  h1 {
    @apply text-4xl;
  }
}
</style>
