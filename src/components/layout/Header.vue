<template>
  <header class="header">
    <section class="header__brand">
      <g-link to="/">
        <h1>
          {{ $static.metadata.siteName }}
        </h1>
      </g-link>
      <g-link :to="searchLink.url">
        {{ searchLink.title }}
      </g-link>
    </section>
    <nav class="navigation">
      <ul>
        <li v-for="(link, i) in navigationLink" :key="i">
          <g-link :to="link.url">
            {{ link.title }}
          </g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "📝Blog", url: "/blog" },
        {
          title: "💡Projects",
          url: "/projects",
        },
        {
          title: "😀About me",
          url: "/about",
        },
        {
          title: "📞Contact",
          url: "/contact",
        },
        { title: "🔎Search", url: "/search" },
      ],
    };
  },
  computed: {
    navigationLink() {
      return this.links.filter((link) => link.url !== "/search");
    },
    searchLink() {
      return this.links.find((link) => link.url === "/search");
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<style lang="scss" scoped>
.header {
  &__brand {
    @apply flex flex-row items-center justify-between;
  }

  .navigation {
    @apply my-4;

    ul {
      @apply list-none;

      li {
        @apply my-2;
      }
    }
  }

  @screen sm {
    .navigation {
      ul {
        & {
          @apply flex justify-between;

          li {
            @apply my-0;
          }
        }
      }
    }
  }
}
</style>
