<template>
  <a :href="getURL" target="_blank" rel="noopener noreferrer nofollow">{{ getTitle }}</a>
</template>

<script>
export default {
  props: {
    contact: Object
  },
  data: function() {
    return {};
  },
  computed: {
    getTitle: function() {
      const {
        frontmatter: { title }
      } = this.contact;

      return title;
    },

    getURL: function() {
      const {
        frontmatter: { url }
      } = this.contact;

      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/style.scss";

a {
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
