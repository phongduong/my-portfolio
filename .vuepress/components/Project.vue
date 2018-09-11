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
      transition: all ease 0.5s;
    }
  }

  .information {
    flex-basis: 70%;
    padding-bottom: 1.2em;
    padding-left: 0.5em;
    padding-right: 0.5em;

    .title {
      h3 {
        color: var(--color);
      }
    }

    .description {
      p {
        color: var(--sub-color);
      }
    }

    .buttons {
      button {
        border: none;
        font-size: 1em;
        padding: 0.5em;
        background: var(--sub-background);

        a {
          text-decoration: none;
          color: var(--color);
        }

        &:hover {
        }
      }
    }
  }

  &:hover {
    cursor: pointer;

    .logo {
      img {
        transform: scale(1.2);
      }
    }

    .information {
      background: #f5f5f5;
    }
  }
}
</style>
