<template></template>

<script>
export default {
  props: ["title", "description", "path"],
  metaInfo() {
    const { title, description, path } = this;
    const url = `${this.$static.metadata.siteUrl}${path}`;

    return {
      title,
      meta: [
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          key: "og:title",
          property: "og:title",
          content: title,
        },
        {
          key: "og:description",
          property: "og:description",
          content: description,
        },
        {
          key: "og:url",
          property: "og:url",
          content: url,
        },
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: url,
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
  }
}
</static-query>
