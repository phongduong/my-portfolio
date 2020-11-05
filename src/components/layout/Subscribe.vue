<template>
  <section class="subscribe">
    <h3>If you like my content and want to get more, you can</h3>
    <p><a :href="youtube.url">📺 Subscribe to my Youtube channel</a></p>
    <p><a :href="newsletter.url">💌 Subscribe to my newsletter</a></p>
    <h3>Or</h3>
    <p><a :href="buyMeACoffee.url">💰 Buy me a coffee</a></p>
  </section>
</template>

<script>
import { Contacts } from "~/utils";

export default {
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
  @apply p-4 my-16 border-solid border-t-4 border-b-4 border-black;
}
</style>
