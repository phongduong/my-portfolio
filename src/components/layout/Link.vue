<template>
  <a :href="to" rel="noreferrer noopener" target="_blank"><slot /></a>
</template>

<script>
export default {
  props: ["to"],
};
</script>
