<template>
  <div class="post-share">
    <p>
      <em>Share: </em>
      <a
        v-for="link in shareLinks"
        :key="link.label"
        :href="link.url"
        target="_blank"
        rel="noopener"
        >{{ link.label }}</a
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "path"],
  computed: {
    url() {
      return `${this.$static.metadata.siteUrl}${this.path}`;
    },
    shareLinks() {
      const encodeTitle = encodeURIComponent(this.title);

      const links = [
        {
          label: "Twitter",
          url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `${this.title} ${this.url}`
          )}`,
        },
        {
          label: "Facebook",
          url: `https://www.facebook.com/sharer.php?u=${this.url}`,
        },
        {
          label: "LinkedIn",
          url: `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}&title=${encodeTitle}`,
        },
        {
          label: "Hacker News",
          url: `https://news.ycombinator.com/submitlink?u=${this.url}&t=${encodeTitle}`,
        },
      ];

      return links;
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteUrl
    twitter_creator
  }
}
</static-query>

<style lang="scss" scoped>
.post-share {
  @apply my-8;

  a {
    @apply ml-3;
  }
}
</style>
