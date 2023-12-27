<script setup lang="ts">

import SidebarCategory from "./SidebarCategory.vue";

defineProps<{ categoryList: Array<Category> }>()
</script>
<template>
  <div class="sidebar">
    <div v-for="item in categoryList" :key="item.id">
      <SidebarCategory :category="item"/>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  overflow-y: auto;
  width: 15vw; /* 15% of viewport width */
  background-image: linear-gradient(135deg, #00ffff 20%, #ffffff 70%);
  opacity: 0.6;
}
</style>

