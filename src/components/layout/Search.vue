<template>
  <section class="search-input">
    <form @submit.prevent="handleSearch">
      <input v-model="query" placeholder="Search" />
      <button>Search</button>
    </form>
  </section>
</template>

<script>
import Fuse from "fuse.js";

export default {
  data() {
    return {
      query: "",
      fuse: undefined,
    };
  },
  props: {
    list: Array,
    keys: Array,
  },
  mounted() {
    const options = {
      keys: this.keys,
      shouldSort: false,
      threshold: 0.2,
    };
    this.query = this.$route?.query?.query;
    this.fuse = new Fuse(this.list, options);

    if (!!this.query) {
      this.handleSearch();
    }
  },
  methods: {
    handleSearch() {
      this.$emit("search", {
        result: this.fuse.search(this.query),
        query: this.query,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  @apply mb-6;

  input {
    @apply border border-gray-800 rounded p-2 w-full text-lg;

    @screen sm {
      @apply w-2/4;
    }
  }

  button {
    @apply border-2 bg-black border-black text-white p-2 mt-4;

    &:hover {
      @apply bg-white text-black;
    }

    @screen sm {
      @apply ml-4 mt-0;
    }
  }
}
</style>
