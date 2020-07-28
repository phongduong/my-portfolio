<template> </template>

<script>
export default {
  props: ["title", "description", "path"],
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}${this.path}`,
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
    siteDescription
  }
}

</static-query>
