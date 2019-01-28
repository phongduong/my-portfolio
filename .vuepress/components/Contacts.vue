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
  @media screen and (max-width: $xs-break-point) {
  }
  @media screen and (min-width: $sm-break-point) {
  }
  @media screen and (min-width: $md-break-point) {
  }
  @media screen and (min-width: $lg-break-point) {
  }
}
</style>
