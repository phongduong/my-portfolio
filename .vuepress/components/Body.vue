<template>
  <section>
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
</style>
