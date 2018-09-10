<template>
  <section>
    <div class="logo">
      <img :src="information.logo" alt="Logo" />
    </div>
    <div class="information">
      <h3>{{ information.title }}</h3>
      <p>{{ information.description}}</p>
      <button><a :href="information['public-url']" target="_blank">Website</a></button>
      <button><a :href="information['source-url']" target="_blank">Source code</a></button>
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
  flex-basis: 40%;
  display: flex;
  border-radius: var(--project-border-radius);
  box-shadow: var(--project-box-shadow);
  background: #fff;
  margin: 0.5em 0;

  .logo {
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 5em;
    }
  }

  .information {
    flex-basis: 70%;
  }
}
</style>
