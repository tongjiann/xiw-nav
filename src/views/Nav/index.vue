<script setup lang="ts">

import NavHeader from "./components/NavHeader.vue";
import NavMain from "./components/NavMain.vue";
</script>

<template>
  <div class="nav">
    <NavHeader/>
    <NavMain/>
  </div>
</template>

<style scoped lang="scss">
.nav {
  height: 100vh;
  width: 100vw;
  display: block;
}

</style>
