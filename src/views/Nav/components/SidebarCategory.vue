<script setup lang="ts">
defineProps<{ category: Category }>()


</script>

<template>
  <div class="sidebar-category">
    {{ category.name}}
  </div>
</template>

<style scoped>
.sidebar-category {
  margin: 20px 0;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #233;
}
</style>
