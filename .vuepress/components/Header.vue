<template>
  <header id="about">
    <h1>Hi, i am {{ title }}</h1>
    <h2>{{ description }}</h2>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 5em 2.5em;
  position: sticky;
  top: 0;
  z-index: 2;
  background: #fff;
  
  h1 {
    font-size: 3em;
    color: var(--color);
    margin-top: 0;
  }

  h2 {
    font-size: 2em;
    color: var(--color);
  }
}
</style>
