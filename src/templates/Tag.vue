<template>
  <Layout>
    <SEO
      :title="$page.tag.title"
      :description="$page.metadata.siteDescription"
      :path="$page.tag.path"
    />
    <h1 class="tag">#{{ $page.tag.title }}</h1>
    <BlogItem v-for="(post, index) in posts" :key="index" :post="post" />
  </Layout>
</template>

<script>
import { BlogItem } from "~/components/blog";
import { SEO } from "~/components/layout";

export default {
  components: {
    BlogItem,
    SEO,
  },
  computed: {
    posts() {
      return this.$page.tag.belongsTo.posts;
    },
  },
};
</script>

<page-query>
query($id: ID!) {
  metadata {
    siteDescription
  }

  tag(id: $id) {
    title
    path
    belongsTo {
      posts: edges {
        node {
          ... on BlogPost {
            id
            path
            title
            date (format: "DD-MM-YYYY")
          }
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.tag {
  @apply my-6;
}
</style>
