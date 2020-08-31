<template>
  <section class="search-input">
    <input v-model="text" placeholder="Search" @input="handleInput" />
  </section>
</template>

<script>
import Fuse from "fuse.js";

export default {
  data() {
    return {
      text: "",
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
      threshold: 0.5,
    };

    this.fuse = new Fuse(
      this.list.map((item) => item.node),
      options
    );
  },
  methods: {
    handleInput(e) {
      this.$emit("search", {
        text: this.text,
        result: this.fuse
          .search(e.target.value)
          .map(({ item }) => ({ node: item })),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  @apply mb-8;

  input {
    @apply border border-gray-800 rounded p-2 w-full text-lg;

    @screen sm {
      @apply w-2/4;
    }
  }
}
</style>
