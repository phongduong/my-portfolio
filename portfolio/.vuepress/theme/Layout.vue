<template>
  <main class="section is-main">
    <div class="columns">
      <section class="column is-9">
        <div class="section box">
          <Content/>
        </div>
      </section>
      <section class="column is-3">
        <div class="section box">
          <Sidebar/>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import bulma from "bulma";
import Sidebar from "../components/Sidebar.vue";

export default {
  components: {
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.is-main {
  background: #00949c;
}
</style>

