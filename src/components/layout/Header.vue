<template>
  <header class="header">
    <section class="header__brand">
      <g-link to="/">
        <h1>
          {{ $static.metadata.siteName }}
        </h1>
      </g-link>
      <p>{{ $static.metadata.siteDescription }}</p>
    </section>
    <nav class="nav">
      <ul>
        <li v-for="(link, i) in links" :key="i">
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
      ],
    };
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
p {
  @apply my-2;
}

nav {
  @apply my-4;

  ul {
    @apply list-none;

    li {
      @apply my-2;
    }
  }
}

@screen sm {
  nav {
    ul {
      & {
        @apply grid grid-cols-3;

        li {
          @apply text-center my-0;
        }
      }
    }
  }
}
</style>
