<template>
  <section>
    <div class="information">
      <div class="title">
        <h3>{{ information.title }}</h3>
      </div>
      <div class="description">
        <p>{{ information.description }}</p>
      </div>
      <div class="buttons">
        <a
          :href="information['public-url']"
          target="_blank"
          rel="noopener noreferrer nofollow"
          >Go to project</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: Object
  },
  data: function() {
    return {
      information: null
    };
  },
  created: function() {
    const { frontmatter } = this.project;
    this.information = frontmatter;
  }
};
</script>

<style lang="scss" scoped>
@import "../style/style.scss";

section {
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
