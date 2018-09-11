<template>
  <li>
    <a :href="getURL" target="_blank">
      <i class="fab" :class="getClass"></i>
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
    }
  },
  computed: {
    getClass: function() {
      const { 
        frontmatter: {
          title
        } 
      } = this.contact 

      return title;
    },

    getURL: function() {
      const {
        frontmatter: {
          url
        }
      } = this.contact

      return url
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;

  a {
    display: inline-block;
    color: var(--sub-color);
    font-size: 1.8em;
    transition: all 0.4s;
    border-radius: 50%;
    width: 1.8em;
    line-height: 1.8em;

    &:hover {
      background: var(--color);
      color: var(--sub-background);
    }
  }
}
</style>
