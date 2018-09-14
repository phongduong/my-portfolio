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
@import "../style/style.scss";

.projects {
  position: sticky;
  top: 0;
  z-index: 3;
  margin-bottom: 4.3em;
  padding: 2.5em;
  background: #fff;

  h2 {
    margin: 1.5em 0;
    text-align: center;
    font-size: 2em;
    color: var(--color);
  }

  @media screen and (max-width: $xs-break-point) {
    & {
      margin-bottom: 3.9em;
      padding: 1em;
      padding-bottom: 2em;

      h2 {
        margin: 1em 0;
      }
    }
  }
  @media screen and (min-width: $sm-break-point) {
  }
  @media screen and (min-width: $md-break-point) {
  }
  @media screen and (min-width: $lg-break-point) {
  }
}
</style>
