<template>
  <Layout>
    <SEO
      title="About me"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <div v-html="$page.about.edges[0].node.content"></div>
    <p>You can find me on</p>
    <a :href="email.url">
      {{ email.name }}
    </a>
    <Link
      class="contact-link"
      v-for="(contact, i) in contactList"
      :key="i"
      :to="contact.url"
    >
      {{ contact.name }}
    </Link>
  </Layout>
</template>

<script>
import Link from "~/components/layout/Link.vue";
import SEO from "~/components/layout/SEO.vue";
import { Contacts } from "~/utils";

export default {
  components: { SEO, Link },
  computed: {
    contacts() {
      return new Contacts(this.$page.contact);
    },
    email() {
      return this.contacts.getContactDetail("Email");
    },
    contactList() {
      const contactList = ["Twitter", "Facebook", "Github", "Twitch", "DEV"];

      return contactList.map((contact) =>
        this.contacts.getContactDetail(contact)
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
  @apply ml-2;
}
</style>
