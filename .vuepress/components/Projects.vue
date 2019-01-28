<template>
  <section id="projects" class="projects">
    <<<<<<< HEAD
    <h2>Some projects I worked on</h2>
    =======
    <h2>Some projects i worked on</h2>
    >>>>>>> c85b5215d2d9ea782bdbfb1be67723c016b932b5
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
@import "../style/style.scss";

.projects {
  @media screen and (max-width: $xs-break-point) {
  }
  @media screen and (min-width: $sm-break-point) {
  }
  @media screen and (min-width: $md-break-point) {
  }
  @media screen and (min-width: $lg-break-point) {
  }
}
</style>
