<template>
  <section class="pager">
    <Pager :info="info" linkClass="pager-link" :showNavigation="false" />
  </section>
</template>

<script>
import { Pager } from "gridsome";

export default { components: { Pager }, props: ["info"] };
</script>

<style lang="scss">
.pager-link {
  @apply mr-4 px-4 py-2 border-2 bg-black border-black text-white no-underline;

  &:hover,
  &.active {
    @apply bg-white text-black;
  }
}
</style>
