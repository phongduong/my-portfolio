<template>
  <footer>
    <ul>
      <li><a href="/rss.xml">RSS</a></li>
    </ul>
  </footer>
</template>

<script>
import { Link } from "~/components/layout";

export default {
  components: {
    Link,
  },
};
</script>

<static-query>
</static-query>

<style lang="scss" scoped>
footer {
  @apply mt-10;

  ul {
    @apply list-none grid grid-cols-2;

    li {
      @apply py-1;
    }
  }

  @screen sm {
    ul {
      @apply grid-cols-3;
    }
  }
}
</style>
