<template>
  <div>
    <div v-for="contact in contacts" :key="contact.name">
      <a class="is-size-2" :href="`mailto:${contact.url}`" v-if="contact.name === 'Email'">{{ contact.name }}</a>
      <a
        class="is-size-2"
        :href="contact.url"
        target="_blank"
        rel="noopener noreferrer"
        v-else
      >{{ contact.name }}</a>
    </div>
  </div>
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

