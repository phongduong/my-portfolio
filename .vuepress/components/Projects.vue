<template>
  <section id="projects" class="projects">
    <h2>Some projects i worked on</h2>
    <Project 
      v-for="project in this.projects"
      :key="project.key"
      :project="project"
    />
  </section>
</template>

<script>
import Project from "./Project.vue";

export default {
  props: {
    projects: Array
  },
  components: {
    Project
  }
};
</script>

<style lang="scss" scoped>
.projects {
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 2.5em;
  padding-bottom: 7em;
  background: #fff;

  h2 {
    margin: 1.5em 0;
    text-align: center;
    font-size: 2em;
    color: var(--color);
  }
}
</style>
