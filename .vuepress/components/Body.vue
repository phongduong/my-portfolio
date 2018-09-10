<template>
  <main>
    <Project 
      v-for="project in this.projects"
      :key="project.key"
      :project="project"
    />
  </main>
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
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: var(--body-background);
  padding: 4em 0;
}
</style>
