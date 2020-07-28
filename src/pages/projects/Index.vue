<template>
  <Layout>
    <SEO
      title="Projects"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <h1>Projects</h1>
    <ProjectItem
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </Layout>
</template>

<script>
import ProjectItem from "~/components/projects/ProjectItem.vue";
import SEO from "~/components/layout/SEO.vue";

export default {
  components: {
    ProjectItem,
    SEO,
  },
  computed: {
    projects() {
      return this.$page.projects.edges[0].node.projects.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
  },
};
</script>

<page-query>
query {
  metadata {
    siteDescription
  }

  page(path: "/projects") {
    path
  }

  projects: allProject {
    edges {
      node {
        projects {
          name
          description
          date
          url
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
