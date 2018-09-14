<template>
  <main>
    <section class="text">
      <Navbar />
      <Header 
        :title="$site.title" 
        :description="$site.description" 
        />
      <Contacts :contacts="$site.pages.filter(({frontmatter}) => frontmatter.type === `contact`)" />
      <Projects 
        :projects="$site.pages.filter(({frontmatter}) => frontmatter.type === `project`)"
        />
      <Footer />
    </section>
    <section class="background">
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
  color: var(--color);
}

html {
  scroll-behavior: smooth;
}

body {
  width: 100%;
  margin: 0;

  main {
    display: flex;

    .text {
      flex-basis: 70%;
    }

    .background {
      flex-basis: 30%;
      background: url(("/images/background.jpg"));
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  @media screen and (max-width: $xs-break-point) {
    & {
      main {
        .text {
          flex-basis: 100%;
        }

        .background {
          flex-basis: 0;
        }
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
