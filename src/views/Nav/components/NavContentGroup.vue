<script setup lang="ts">

import NavContentMain from "./NavContentMain.vue";
</script>

<template>
  <div class="nav-content-group">
    <div class="nav-content-group-top">
      <div class="nav-content-group-name">分组名称</div>
      <div class="nav-content-group-comment">分组备注</div>
    </div>
    <div class="nav-content-main-group">
      <NavContentMain/>
      <NavContentMain/>
      <NavContentMain/>
      <NavContentMain/>
      <NavContentMain/>
    </div>
  </div>
</template>

<style scoped>
.nav-content-group-top {
  display: flex;
}

.nav-content-group-name {
  margin-right: 10px;
}

.nav-content-main-group {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

</style>
