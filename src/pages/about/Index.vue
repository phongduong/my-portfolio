<template>
  <Layout>
    <SEO
      title="About me"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <div v-html="$page.about.edges[0].node.content"></div>
    <p>You can find me on</p>
    <Link
      class="contact-link"
      v-for="(contact, index) in contacts"
      :key="index"
      :to="contact.url"
    >
      {{ contact.name }}
    </Link>
  </Layout>
</template>

<script>
import Link from "~/components/layout/Link.vue";
import SEO from "~/components/layout/SEO.vue";

export default {
  components: { SEO, Link },
  computed: {
    contacts() {
      const contactList = ["Email", "Twitter", "Github", "LinkedIn", "DEV"];

      return this.$page.contact.edges[0].node.contact.filter(({ name }) =>
        contactList.includes(name)
      );
    },
  },
};
</script>

<page-query>
query {
  metadata {
    siteDescription
  }

  page(path: "/about") {
    path
  }

  about: allAbout {
    edges {
      node {
        content
      }
    }
  }

  contact: allContact {
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
</page-query>

<style lang="scss" scoped>
.contact-link {
  @apply ml-4;
}
</style>
