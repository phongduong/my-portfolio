<template>
  <div class="columns is-multiline">
    <div class="column is-6" v-for="project in projects" :key="project.name">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h3 class="title is-3">{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
        <footer class="card-footer">
          <a
            class="card-footer-item"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
          >Link</a>
        </footer>
      </div>
    </div>
  </div>
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

