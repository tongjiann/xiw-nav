<template>
  <div class="categoryTop">
    <div class="categoryName" style="padding-right: 20px">分类名称</div>
    <div class="categoryComment">分类描述</div>
  </div>
  <div class="sub">
    <HomeCategoryMain/>
    <HomeCategoryMain/>
    <HomeCategoryMain/>
    <HomeCategoryMain/>
  </div>
</template>

<script setup lang="ts">

import HomeCategoryMain from "./HomeCategoryMain.vue";
</script>

<style scoped>
.sub {
  display: flex;
}
.categoryTop{
  text-align: left;
  display: flex;
  margin: 20px;
  font-size: 20px;
}
</style>
