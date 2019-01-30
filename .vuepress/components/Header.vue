<template>
  <header id="about">
    <h1>Hi, I am {{ title }}</h1>
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
  text-align: center;
  padding: 3em 0;

  @media screen and (max-width: $xs-break-point) {
  }
  @media screen and (min-width: $sm-break-point) {
  }
  @media screen and (min-width: $md-break-point) {
  }
  @media screen and (min-width: $lg-break-point) {
  }
}
</style>
