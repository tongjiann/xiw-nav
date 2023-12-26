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

}

.content-container {
  display: flex; /* 使用 Flex 布局 */
  flex-wrap: wrap; /* 允许内容换行 */
  justify-content: space-around; /* 在主轴上均匀分布子元素 */
}
</style>
