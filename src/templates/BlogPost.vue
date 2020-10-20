<template>
  <Layout>
    <SEO :title="post.title" :description="post.excerpt" :path="post.path" />
    <article class="blog">
      <h1 class="blog__title">{{ post.title }}</h1>
      <p class="blog__info">
        {{ post.date }} |
        <g-link :to="`blog/tag/${post.tag.title}`">
          #{{ post.tag.title }}
        </g-link>
      </p>
      <div class="blog__content" v-html="post.content"></div>
    </article>
  </Layout>
</template>

<script>
import { SEO } from "~/components/layout";

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
      excerpt
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
    @apply text-gray-800 my-4;
  }

  &__content {
    img {
      @apply mx-auto w-3/4;
    }
  }
}
</style>
