<script setup lang="ts">

import NavContentMain from "./NavContentMain.vue";

defineProps<{ category: Category }>()

</script>

<template>
  <div class="nav-content-group">
    <div class="nav-content-group-top">
      <div class="nav-content-group-name">{{ category.name }}</div>
      <div class="nav-content-group-comment">{{ category.description }}</div>
    </div>
    <div class="nav-content-main-group">
      <div v-for="item in category.navList" :key="item.id">
        <NavContentMain :nav-item="item"/>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-content-group-top {
  display: flex;
  align-items: baseline;
  margin: 0 20px;
  padding-top: 10px;
  width: 100%;
  color: rgba(0, 0, 0, .87);;
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
.nav-content-group{
width: 95%;
}
</style>
