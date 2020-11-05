<template>
  <Layout>
    <SEO
      title="Blog"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <h1>Blog</h1>
    <BlogItem v-for="(post, index) in posts" :key="index" :post="post" />
    <Pager :info="$page.posts.pageInfo" />
  </Layout>
</template>

<script>
import { BlogItem } from "~/components/blog";
import { SEO, Pager } from "~/components/layout";

export default {
  components: { BlogItem, SEO, Pager },
  computed: {
    posts() {
      return this.$page.posts.edges;
    },
  },
};
</script>

<page-query>
query($page: Int) {
  metadata {
    siteDescription
  }

  page(path: "/blog") {
    path
  }

  posts: allBlogPost(page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }

    edges {
      node {
        path
        title
        date(format: "DD-MM-YYYY")
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
