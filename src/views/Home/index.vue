<script setup lang="ts">

import HomeLeft from "./components/HomeLeft.vue";
import HomeMain from "./components/HomeMain.vue";
</script>

<template>
  <div class="container">
    <HomeLeft class="left"/>
    <HomeMain class="main"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100%;
}

.left {
  width: 15%;
}

.main {
  width: 85%;
  overflow: auto;
  height: calc(100% - 100px);
}
</style>
