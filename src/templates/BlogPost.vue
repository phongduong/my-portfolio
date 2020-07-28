<template>
  <Layout>
    <SEO
      :title="post.title"
      :description="post.description"
      :path="post.path"
    />
    <article class="blog">
      <h1 class="blog__title">{{ post.title }}</h1>
      <p class="blog__info">
        {{ post.date }} |
        <g-link :to="`blog/tag/${post.tag.title}`">
          #{{ post.tag.title }}
        </g-link>
      </p>
      <h2 class="blog__description">{{ post.description }}</h2>
      <div class="blog__content" v-html="post.content"></div>
    </article>
  </Layout>
</template>

<script>
import SEO from "~/components/layout/SEO.vue";

export default {
  components: {
    SEO,
  },
  computed: {
    post() {
      return this.$page.post;
    },
  },
};
</script>

<page-query>
  query ($id: ID!) {
    post: blogPost(id: $id) {
      id
      path
      content
      title
      description
      date (format: "DD-MM-YYYY")
      tag {
        title
      }
    }
  }
</page-query>

<style lang="scss">
.blog {
  &__title {
    @apply my-4;
  }

  &__info {
    @apply text-gray-400 my-4;
  }

  &__description {
    @apply text-gray-300;
  }

  &__content {
    img {
      @apply mx-auto w-3/4;
    }
  }
}
</style>
