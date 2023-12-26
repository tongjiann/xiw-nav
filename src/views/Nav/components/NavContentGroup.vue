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
      <NavContentMain/>
      <NavContentMain/>
    </div>
  </div>
</template>
<style scoped>
.nav-content-group-top {
  display: flex;
  align-items: baseline;
  margin: 0 20px;
  color: rgba(0,0,0,.87);;
}

.nav-content-group-name {
  margin-right: 10px;
  font-size: 20px;
}

.nav-content-group-comment {
  font-size: 12px;
}

.nav-content-main-group {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
