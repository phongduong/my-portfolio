<template>
  <section id="contacts" class="contacts">
    <h2>Keep in touch with me</h2>
    <section class="contacts">
      <Contact 
        v-for="contact in contacts" 
        :key="contact.key" 
        :contact="contact"
      />
    </section>
  </section>
</template>

<script>
import Contact from "./Contact.vue";

export default {
  props: {
    contacts: Array
  },
  components: {
    Contact
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 2.5em 2.5em;
  background: var(--sub-background-dark);

  h2 {
    margin: 1.5em 0;
    text-align: center;
    font-size: 2em;
    color: var(--color);
  }

  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
  }
}
</style>
