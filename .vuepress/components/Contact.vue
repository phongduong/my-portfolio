<template>
  <a :href="getURL" target="_blank" rel="noopener">
    {{ getTitle }}
  </a>
</template>

<script>
export default {
  props: {
    contact: Object
  },
  data: function() {
    return {
      contactData: this.contact
    };
  },
  computed: {
    getTitle: function() {
      const { frontmatter: { title } } = this.contact;

      return title;
    },

    getURL: function() {
      const { frontmatter: { url } } = this.contact;

      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/style.scss";

a {
  cursor: pointer;
  flex-basis: 45%;
  text-align: center;
  border: 5px solid var(--background);
  margin-bottom: 2em;
  text-decoration: none;
  color: var(--background);
  font-size: 2em;
  font-weight: 700;

  &:hover {
    background: var(--sub-background-light);
  }

  @media screen and (max-width: $xs-break-point) {
    & {
      flex-basis: 100%;
      margin-bottom: 1em;
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
