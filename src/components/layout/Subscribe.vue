<template>
  <section class="subscribe">
    <h3>If you like my content and want to get more, you can</h3>
    <p><Link :to="youtube.url">📺 Subscribe my Youtube channel</Link></p>
    <p><Link :to="newsletter.url">💌 Subscribe my weekly newsletter</Link></p>
    <h3>Or</h3>
    <p><Link :to="buyMeACoffee.url">💰 Buy me a coffee</Link></p>
  </section>
</template>

<script>
import Link from "./Link.vue";

export default {
  components: {
    Link,
  },
  computed: {
    contact() {
      return this.$static.contact.edges[0].node.contact;
    },
    buyMeACoffee() {
      return this.contact.find((item) => item.name === "Buy me a coffee");
    },
    youtube() {
      return this.contact.find((item) => item.name === "Youtube");
    },
    newsletter() {
      return this.contact.find((item) => item.name === "Newsletter");
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
