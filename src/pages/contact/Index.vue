<template>
  <Layout>
    <SEO
      title="Contact"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <p>
      If you want to contact me, you can email me at
      <Link :to="email.url">
        {{ email.url.split("mailto:")[1] }}
      </Link>
    </p>
    <p>
      Follow me on
      <Link
        class="contact-link"
        v-for="(link, i) in social"
        :key="i"
        :to="link.url"
        >{{ link.name }}
      </Link>
    </p>
    <p>
      I also write on <Link :to="dev.url">{{ dev.name }}</Link>
    </p>
    <p>
      You can find my code on <Link :to="github.url">{{ github.name }}</Link>
    </p>
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
    social() {
      return ["Twitter", "Facebook"].map((social) =>
        this.contacts.getContactDetail(social)
      );
    },
    dev() {
      return this.contacts.getContactDetail("DEV");
    },
    github() {
      return this.contacts.getContactDetail("Github");
    },
  },
};
</script>

<page-query>
query {
  metadata {
    siteDescription
  }

  page(path: "/contact") {
    path
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
