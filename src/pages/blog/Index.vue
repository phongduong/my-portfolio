<template>
  <Layout>
    <SEO
      title="Blog"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <h1>Blog</h1>
    <BlogItem v-for="(post, index) in posts" :key="index" :post="post" />
  </Layout>
</template>

<script>
import BlogItem from "~/components/blog/BlogItem.vue";
import SEO from "~/components/layout/SEO.vue";

export default {
  components: { BlogItem, SEO },
  computed: {
    posts() {
      return this.$page.posts.edges;
    },
  },
};
</script>

<page-query>
query {
  metadata {
    siteDescription
  }

  page(path: "/blog") {
    path
  }

  posts: allBlogPost {
    edges {
      node {
        id
        path
        content
        excerpt
        title
        description
        date (format: "DD-MM-YYYY")
        tag {
          title
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
h1 {
  @apply my-6;
}
</style>
