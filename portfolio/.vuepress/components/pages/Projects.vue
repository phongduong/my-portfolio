<template>
  <ul>
    <li class="" v-for="(project, i) in projects" :key="i">
      <h3 class="">
        <a
          class=""
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ project.name }}
        </a>
      </h3>
      <p>{{ project.description }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    projects: function() {
      return this.$page.frontmatter.projects;
    }
  }
};
</script>
