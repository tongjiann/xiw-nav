<script setup lang="ts">

import HomeCategoryNav from "./HomeCategoryNav.vue";
</script>

<template>
  <div class="parent">
    <HomeCategoryNav/>
    <HomeCategoryNav/>
    <HomeCategoryNav/>
    <HomeCategoryNav/>
    <HomeCategoryNav/>
    <HomeCategoryNav/>
    <HomeCategoryNav/>
  </div>
</template>

<style scoped>
.parent {
  display: inline-block;
  background-image: linear-gradient(135deg, #00ffff 20%, #ffffff 70%);
  opacity: 0.6;
}
</style>
