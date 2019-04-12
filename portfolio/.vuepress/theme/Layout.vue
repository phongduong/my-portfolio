<template>
  <main class="section is-main">
    <div class="container">
      <div class="columns">
        <section class="column is-9">
          <Content/>
        </section>
        <section class="column is-3">
          <div class="section box">
            <Sidebar/>
          </div>
        </section>
      </div>
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
  background: #f5f8f8;
}
</style>

