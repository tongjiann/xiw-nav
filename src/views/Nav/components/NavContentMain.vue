<script setup lang="ts">

</script>
<template>
  <div class="nav-content-main">
    <div class="nav-content-main-primary">
      <img src="/src/assets/icon.png" alt="HUAN" width="16px" height="16px">
      <span class="nav-content-main-name">名称称称称称称称称</span>
    </div>
    <div class="nav-content-main-description">
      <span>描述描述描述描述描述描述描述</span>
    </div>
  </div>
</template>


<style scoped>
.nav-content-main {
  overflow: hidden;
  height: 90px;
  width: 150px;
  color: #000;
  background-color: #fff;
  opacity: 0.6;
  border-radius: 7px;
  margin: 10px 20px;
  padding: 10px;
}

.nav-content-main-name {
  font-size: 24px;
  margin: 0 5px;
}

.nav-content-main-primary {
  position: relative;
  display: flex; /* 使用 Flex 布局 */
  align-items: center; /* 垂直居中对齐 */
  margin: 10px 0;
}


span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 显示的行数 */
  -webkit-box-orient: vertical;
}
.nav-content-main-description{
    font-size: 14px;
    line-height: 24px;
  color: rgba(0,0,0,.38)!important;
}

</style>
