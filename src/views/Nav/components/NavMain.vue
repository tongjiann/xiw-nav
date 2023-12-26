<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import NavContent from "./NavContent.vue";
</script>

<template>
  <div class="nav-main">
    <Sidebar />
    <div class="nav-content">
      <NavContent />
    </div>
  </div>
</template>

<style scoped>
.nav-main {
  display: flex;
}

.nav-content {
  flex: 1; /* 占据剩余空间 */
  overflow-y: auto; /* 在需要时显示纵向滚动条 */
  max-height: 90vh; /* 或者设置具体的最大高度 */
}
</style>
