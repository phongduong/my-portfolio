<template>
  <footer>
    <ul>
      <li
        v-for="(contact, index) in $static.contacts.edges[0].node.contact"
        :key="index"
      >
        <Link :to="contact.url">
          {{ contact.name }}
        </Link>
      </li>
      <li><a href="/rss.xml">RSS</a></li>
    </ul>
  </footer>
</template>

<script>
import Link from "~/components/layout/Link.vue";

export default {
  components: {
    Link,
  },
};
</script>

<static-query>
query {  
  contacts: allContact {
    edges {
      node {
        contact {
          name
          url
        }
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
footer {
  @apply mt-10;

  ul {
    @apply list-none grid grid-cols-2;

    li {
      @apply py-1;
    }
  }

  @screen sm {
    ul {
      @apply grid-cols-3;
    }
  }
}
</style>
