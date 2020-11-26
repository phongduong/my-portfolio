<template>
  <Layout>
    <SEO
      title="Home"
      :description="$page.metadata.siteDescription"
      :path="$page.page.path"
    />
    <Section title="Blog" link="/blog">
      <BlogItem v-for="(post, index) in posts" :key="index" :post="post" />
    </Section>
    <Section title="Projects" link="/projects">
      <ProjectItem
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </Section>
  </Layout>
</template>

<script>
import Section from "~/components/home/Section.vue";
import { BlogItem } from "~/components/blog";
import ProjectItem from "~/components/projects/ProjectItem.vue";
import { SEO } from "~/components/layout";

export default {
  components: {
    Section,
    BlogItem,
    ProjectItem,
    SEO,
  },
  computed: {
    posts() {
      return this.$page.posts.edges;
    },
    projects() {
      return this.$page.projects.edges[0].node.projects
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    },
  },
};
</script>

<page-query>
query {
  metadata {
    siteDescription
  }

  page(path: "/") {
    path
  }

  posts: allBlogPost(limit: 5) {
    edges {
      node {
        path
        title
        date (format: "DD-MM-YYYY")
        tag {
          title
          path
        }
      }
    }
  }

  projects: allProject(limit: 5) {
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

<style></style>
