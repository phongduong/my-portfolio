<template>
  <Layout>
    <SEO
      title="Contact"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <h1>Keep in touch with me</h1>
    <p>
      If you want to contact me, you can email me at
      <a :href="email.url">
        {{ email.url.split("mailto:")[1] }}
      </a>
    </p>
    <p>
      Follow me on
      <a
        class="contact-link"
        v-for="(link, i) in social"
        :key="i"
        :href="link.url"
        >{{ link.name }}
      </a>
    </p>
    <p>
      I also write on <a :href="dev.url">{{ dev.name }}</a>
    </p>
    <p>
      You can find my code on <a :href="github.url">{{ github.name }}</a>
    </p>
  </Layout>
</template>

<script>
import { SEO } from "~/components/layout";
import { Contacts } from "~/utils";

export default {
  components: { SEO },
  computed: {
    contacts() {
      return new Contacts(this.$page.contact);
    },
    email() {
      return this.contacts.getContactDetail("Email");
    },
    social() {
      return ["Twitter", "Facebook", "LinkedIn", "Twitch"].map((social) =>
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
