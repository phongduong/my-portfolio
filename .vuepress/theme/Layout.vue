<template>
  <main>
    <section class="text">
      <Header 
        :title="$site.title" 
        :description="$site.description" 
        :contacts="$site.pages.filter(({frontmatter}) => frontmatter.type === `contact`)"
        />
      <Body 
        :projects="$site.pages.filter(({frontmatter}) => frontmatter.type === `project`)"
        />
      <Footer />
    </section>
    <section class="background">
    </section>
  </main>
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
  width: 100%;
  margin: 0;

  main {
    display: flex;

    .text {
      flex-basis: 50%;
    }

    .background {
      flex-basis: 50%;
      background: url(("/images/background.jpg"));
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
