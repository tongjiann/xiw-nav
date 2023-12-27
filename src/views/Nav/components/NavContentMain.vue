<script setup lang="ts">
import {ref} from "vue";

defineProps<{ navItem: Nav }>()

const isMouseOver = ref(false)

function addHoverClass() {
  isMouseOver.value = true
}

function removeHoverClass() {
  isMouseOver.value = false
}

function redirectToExternalLink(url: string) {
  window.location.href = url
}
</script>
<template>
  <div class="nav-content-main"
       :class="{focus : isMouseOver}"
       @mouseover="addHoverClass"
       @mouseout="removeHoverClass"
       @click="redirectToExternalLink(navItem.url)">
    <div class="nav-content-main-primary">
      <img src="/src/assets/icon.png" alt="HUAN" width="16px" height="16px">
      <span class="nav-content-main-name">{{ navItem.name }}</span>
    </div>
    <div class="nav-content-main-description">
      <span>{{ navItem.description }}</span>
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

.nav-content-main-description {
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, .38) !important;
}

.focus {
  cursor: pointer;
  opacity: 1;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)
}

</style>
