<template>
  <main>
    <section class="text">
      <Navbar/>
      <Header :title="$site.title" :description="$site.description"/>
      <Contacts :contacts="$site.pages.filter(({frontmatter}) => frontmatter.type === `contact`)"/>
      <Projects :projects="$site.pages.filter(({frontmatter}) => frontmatter.type === `project`)"/>
      <Footer/>
    </section>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import Contacts from "../components/Contacts.vue";
import Projects from "../components/Projects.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Header,
    Contacts,
    Projects,
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
  letter-spacing: 1px;
}

body {
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
