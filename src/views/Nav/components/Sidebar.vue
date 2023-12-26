<script setup lang="ts">

import SidebarCategory from "./SidebarCategory.vue";
</script>
<template>
  <div class="sidebar">
    <SidebarCategory />
    <SidebarCategory />
    <SidebarCategory />
    <SidebarCategory />
  </div>
</template>

<style scoped>
.sidebar {
  width: 15vw; /* 15% of viewport width */
  height: calc(100vh - 90px); /* 100% of viewport height */
  background-image: linear-gradient(135deg, #00ffff 20%, #ffffff 70%);
  opacity: 0.6;
}
</style>

