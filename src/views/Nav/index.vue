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
  overflow-y: auto; /* 在需要时显示纵向滚动条 */
  max-height: 100%; /* 或者设置具体的最大高度 */
}

</style>
