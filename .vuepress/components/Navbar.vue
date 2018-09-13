<template>
  <nav>
    <a href="#aboutt">ABOUT</a>
    <a href="#contacts">CONTACTS</a>
    <a href="#projects">PROJECTS</a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  margin: 0;
  padding: 0;
  background: var(--sub-background-light);

  a {
    flex: 1;
    text-decoration: none;
    font-size: 1.2em;
    color: var(--color);
    font-weight: 700;
    text-align: center;
    padding: 1em 0;

    &:hover {
      cursor: pointer;
      background: var(--sub-background-dark);
    }
  }
}
</style>
