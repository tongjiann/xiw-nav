<script setup lang="ts">

import NavContentGroup from "./NavContentGroup.vue";
</script>

<template>
  <div class="content">
    <div class="content-container">
      <NavContentGroup/>
      <NavContentGroup/>
      <NavContentGroup/>
      <NavContentGroup/>
      <NavContentGroup/>
      <NavContentGroup/>
      <NavContentGroup/>
      <NavContentGroup/>
      <NavContentGroup/>
    </div>

  </div>
</template>

<style scoped>
.content {
  background-color: #999;
  width: 85%;
}

.content-container {
  width: fit-content;
}
</style>
