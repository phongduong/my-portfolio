<template>
  <li>
    <a :href="getURL" target="_blank">
      {{ getTitle }}
    </a>
  </li>
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
li {
  flex-basis: 40%;
  list-style: none;
  border: 4px solid var(--background);
  padding: 0.5em;

  &:hover {
    cursor: pointer;
    background: var(--sub-background);
  }

  a {
    text-decoration: none;
    color: var(--background);
    font-weight: bold;
    font-size: 1.2em;
  }
}
</style>
