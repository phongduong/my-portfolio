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
@import "../style/style.scss";

.contacts {
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 2.5em;
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

  @media screen and (max-width: $xs-break-point) {
    & {
      margin-bottom: 1em;
      padding: 1em;
      padding-bottom: 1em;

      h2 {
        margin: 1em 0;
      }
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
