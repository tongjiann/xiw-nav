<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import NavContent from "./NavContent.vue";
import {listVo} from "../../../apis/category.ts";
import {onMounted, ref, Ref} from "vue";

const cList: Ref<Array<Category>> = ref([])
const getList = async () => {
  const res = await listVo()
  cList.value = res.data;
}
onMounted(() => {
  getList()
})
</script>

<template>
  <div class="nav-main">
    <Sidebar :category-list="cList"/>
    <div class="nav-content">
      <NavContent :category-list="cList"/>
    </div>

  </div>
</template>

<style scoped>
.nav-main {
  display: flex;
  height: 95vh;
}

.nav-content {
  flex: 1; /* 占据剩余空间 */
  overflow-y: auto; /* 在需要时显示纵向滚动条 */
  max-height: 95vh; /* 或者设置具体的最大高度 */
}
</style>
