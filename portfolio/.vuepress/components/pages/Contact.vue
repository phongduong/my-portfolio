<template>
  <ul>
    <li v-for="contact in contacts" :key="contact.name">
      <a
        class=""
        :href="`mailto:${contact.url}`"
        v-if="contact.name === 'Email'"
        >{{ contact.name }}</a
      >
      <a
        class=""
        :href="contact.url"
        target="_blank"
        rel="noopener noreferrer"
        v-else
        >{{ contact.name }}</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    contacts: function() {
      return this.$page.frontmatter.contact;
    }
  }
};
</script>
