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
  background: var(--background); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    var(--sub-background),
    var(--background)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    var(--sub-background),
    var(--background)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100vw;
  text-align: center;
  padding: 10em 0;

  h1 {
    margin: 0;
    font-size: 3em;
    color: var(--color);
  }

  h2 {
    color: var(--sub-color);
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    padding: 0 20em;
  }
}
</style>
