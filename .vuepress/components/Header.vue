<template>
  <header>
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <ul class="contacts">
      <Contact 
        v-for="contact in contacts" 
        :key="contact.key" 
        :contact="contact"
      />
    </ul>
  </header>
</template>

<script>
import Contact from "./Contact.vue";

export default {
  props: {
    title: String,
    description: String,
    contacts: Array
  },
  components: {
    Contact
  }
};
</script>

<style lang="scss" scoped>
header {
  text-align: center;

  h1 {
    font-size: 2em;
    color: var(--color);
  }

  h2 {
    color: var(--color);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
  }
}
</style>
