<template>
  <div class="layout">
    <div class="container">
      <Header />
      <div class="content">
        <main>
          <slot />
        </main>
        <Subscribe />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        { name: "author", content: this.$static.metadata.author },
        { name: "keywords", content: this.$static.metadata.keywords },
        { name: "twitter:card", content: this.$static.metadata.twitter_card },
        {
          name: "twitter:creator",
          content: this.$static.metadata.twitter_creator,
        },
        {
          name: "twitter:site",
          content: this.$static.metadata.twitter_creator,
        },
        {
          name: "twitter:image",
          content: `${this.$static.metadata.siteUrl}/image/logo.png`,
        },
        { property: "og:site_name", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription,
        },
        {
          property: "og:image",
          content: `${this.$static.metadata.siteUrl}/image/logo.png`,
        },
      ],
    };
  },
};
</script>

<static-query>
query {
  metadata {
    siteUrl
    siteName
    siteDescription
    author
    keywords
    twitter_card
    twitter_creator
  }
}
</static-query>

<style lang="scss">
h1,
h2,
h3,
p,
a,
li,
button {
  @apply text-black text-lg;
}

h1 {
  @apply text-3xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

p {
  @apply my-5;
}

a {
  @apply underline font-semibold;

  &:hover,
  & > *:hover {
    @apply text-gray-800;
  }
}

ul {
  @apply list-disc list-inside;
}

ol {
  @apply list-decimal list-inside;
}

li {
  @apply my-2;
}

code {
  @apply text-gray-900 bg-gray-300 px-1;
}

blockquote {
  @apply border-l-4 border-gray-800 px-4 italic;
}

.layout {
  .container {
    @apply max-w-3xl mx-auto p-4;

    main {
      @apply my-10;
    }
  }
}
</style>
