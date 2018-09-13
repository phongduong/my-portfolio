<template>
  <a :href="getURL" target="_blank">
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
}
</style>
