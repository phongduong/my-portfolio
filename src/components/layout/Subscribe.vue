<template>
  <section class="subscribe">
    <h3>If you like my content and want to get more, you can</h3>
    <p><Link :to="youtube.url">📺 Subscribe to my Youtube channel</Link></p>
    <p><Link :to="newsletter.url">💌 Subscribe to my newsletter</Link></p>
    <h3>Or</h3>
    <p><Link :to="buyMeACoffee.url">💰 Buy me a coffee</Link></p>
  </section>
</template>

<script>
import Link from "./Link.vue";
import { Contacts } from "~/utils";

export default {
  components: {
    Link,
  },
  computed: {
    contacts() {
      return new Contacts(this.$static.contact);
    },
    buyMeACoffee() {
      return this.contacts.getContactDetail("Buy me a coffee");
    },
    youtube() {
      return this.contacts.getContactDetail("Youtube");
    },
    newsletter() {
      return this.contacts.getContactDetail("Newsletter");
    },
  },
};
</script>

<static-query>
query {
  contact: allContact {
    edges {
      node {
        contact {
          url
          name
        }
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.subscribe {
  @apply p-4 my-8 border-solid border-8 border-gray-100;
}
</style>
