<template>
  <div>
    <Header 
      :title="$site.title" 
      :description="$site.description" 
      :contacts="$site.pages.filter(({frontmatter}) => frontmatter.type === `contact`)"
      />
    <Body 
      :projects="$site.pages.filter(({frontmatter}) => frontmatter.type === `project`)"
      />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Body,
    Footer
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../style/style.scss";

* {
  font-family: var(--font-family);
}

body {
  margin: 0;
}
</style>
