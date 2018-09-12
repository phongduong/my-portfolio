<template>
  <section>
    <div class="logo">
      <img :src="information.logo" alt="Logo" />
    </div>
    <div class="information">
      <div class="title">
        <h3>{{ information.title }}</h3>
      </div>
      <div class="description">
        <p>{{ information.description}}</p>
      </div>
      <div class="buttons">
        <button>
          <a :href="information['public-url']" target="_blank">
            <i class="fas fa-globe" /> Website
          </a>
        </button>
        <button>
          <a :href="information['source-url']" target="_blank">
            <i class="fab fa-github-alt"></i> Source code
          </a>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: Object
  },
  data: function() {
    return {
      information: null
    };
  },
  created: function() {
    const { frontmatter } = this.project;
    this.information = frontmatter;
  }
};
</script>

<style lang="scss" scoped>
section {
}
</style>
