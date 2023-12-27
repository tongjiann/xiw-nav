<script setup lang="ts">

import NavContentGroup from "./NavContentGroup.vue";
import NavFooter from "./NavFooter.vue";

defineProps<{ categoryList: Array<Category> }>()


</script>
<template>
  <div class="content">
    <div class="content-container">
      <div v-for="item in categoryList" :key="item.id" class="nav-content-group-outer">
        <NavContentGroup :category="item"/>
      </div>
      <NavFooter/>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 95vh;
  display: flex;
  align-items: center;
  flex-direction: column;

}

.content-container {
  overflow-y: auto;
  height: 95vh;
}

.nav-content-group-outer {
  display: flex;
  justify-content: center;
}
</style>
