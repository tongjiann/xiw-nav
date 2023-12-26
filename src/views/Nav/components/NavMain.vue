<script setup lang="ts">

import Sidebar from "./Sidebar.vue";
import NavContent from "./NavContent.vue";
</script>

<template>
  <div class="main">
    <Sidebar/>
    <NavContent/>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  height: calc(100% - 90px);
}
</style>
