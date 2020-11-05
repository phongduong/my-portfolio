<template>
  <Layout>
    <SEO
      title="Search"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <h1>Search</h1>
    <Search :keys="['title']" :list="posts" @search="handleSearch" />
    <template v-if="!!resultList.length">
      <BlogItem v-for="(post, index) in resultList" :key="index" :post="post" />
    </template>
    <template v-else><p>No results</p></template>
  </Layout>
</template>

<script>
import { BlogItem } from "~/components/blog";
import { SEO, Search } from "~/components/layout";

export default {
  components: { SEO, Search, BlogItem },
  data() {
    return {
      searchData: {
        result: [],
        query: "",
      },
    };
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map(({ node }) => node);
    },
    resultList() {
      return this.searchData.result.map(({ item }) => ({ node: item }));
    },
  },
  methods: {
    handleSearch(result) {
      this.searchData = result;
      this.$router.push(`?query=${this.searchData.query}`);
    },
  },
};
</script>

<page-query>
query {
  metadata {
    siteDescription
  }

  page(path: "/search") {
    path
  }

  posts: allBlogPost {
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
