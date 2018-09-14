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
@import "../style/style.scss";

header {
  padding: 5em 2.5em;
  position: sticky;
  top: 0;
  z-index: 2;
  background: #fff;

  h1 {
    font-size: 3em;
    color: var(--color);
  }

  h2 {
    font-size: 2em;
    color: var(--color);
  }

  @media screen and (max-width: $xs-break-point) {
    & {
      margin-bottom: 4em;
      padding: 1em;

      h1 {
        font-size: 2.7em;
      }

      h2 {
        font-size: 1.7em;
      }
    }
  }
  @media screen and (min-width: $sm-break-point) {
    & {
      padding: 1em 2.5em;
    }
  }
  @media screen and (min-width: $md-break-point) {
    & {
      margin-bottom: 4em;
    }
  }
  @media screen and (min-width: $lg-break-point) {
  }
}
</style>
