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
        <a :href="information['public-url']" target="_blank">
          Go to project
        </a>
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
@import "../style/style.scss";

section {
  display: flex;
  padding: 2em 0;

  &:not(:last-child) {
    border-bottom: 1px dashed var(--background);
  }

  .logo {
    padding: 1em;

    img {
      width: 10em;
    }
  }

  .information {
    padding: 1em;

    h3 {
      margin: 0;
      font-size: 1.5em;
    }

    p {
      font-size: 1.2em;
    }
  }

  .buttons {
    margin-top: 2em;

    a {
      text-decoration: none;
      color: var(--background);
      border: 3px solid var(--background);
      padding: 0.4em;
      font-weight: 700;

      &:hover {
        background: var(--sub-background-light);
      }
    }
  }

  @media screen and (max-width: $xs-break-point) {
    & {
      padding: 1em 0;
      flex-direction: column;

      .logo {
        text-align: center;
        padding: 0;

        img {
          width: 6em;
        }
      }
    }
  }
  @media screen and (min-width: $sm-break-point) {
    & {
      padding: 1em 0;

      .logo {
        img {
          width: 5em;
        }
      }
    }
  }
  @media screen and (min-width: $md-break-point) {
  }
  @media screen and (min-width: $lg-break-point) {
  }
}
</style>
