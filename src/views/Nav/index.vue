<script setup lang="ts">

import NavHeader from "./components/NavHeader.vue";
import NavMain from "./components/NavMain.vue";
</script>

<template>
  <div class="nav">
    <header class="header">
      <NavHeader/>
    </header>
    <div class="main">
      <NavMain/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 5vh;
}

.main {
  height: 95vh;
}
</style>
