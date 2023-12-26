<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import NavContent from "./NavContent.vue";
</script>

<template>
  <div class="main">
    <Sidebar />
    <div class="nav-content">
      <NavContent />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  height: calc(100vh - 90px); /* 使用视口高度，确保整个页面占据整个视口高度 */
}

.nav-content {
  flex: 1; /* 占据剩余空间 */
  overflow-y: auto; /* 在需要时显示纵向滚动条 */
  max-height: 100vh; /* 或者设置具体的最大高度 */
}
</style>
