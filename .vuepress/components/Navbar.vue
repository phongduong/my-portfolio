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
@import "../style/style.scss";

nav {
  display: flex;
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

  @media screen and (max-width: $xs-break-point) {
    & {
      a {
        font-size: 1em;
      }
    }
  }
  @media screen and (min-width: $sm-break-point) {
  }
  @media screen and (min-width: $md-break-point) {
  }
  @media screen and (min-width: $lg-break-point) {
  }
}
</style>
