<script setup lang="ts">
defineProps({
  category: {
    type: Object,
    default: () => {
    }
  }
})

</script>

<template>
  <div class="homeCategoryMain">
    <div>
      <div class="logo">logo</div>
      <div style="font-size: 24px">name</div>
    </div>

    <div style="font-size: 14px;color: rgba(0,0,0,.38)!important;">description</div>
  </div>
</template>

<style scoped>
.homeCategoryMain {
  color: #000;
  background-color: #fff;
  width: 20%;
  text-align: left;
  margin: 10px;
  padding: 10px;
  opacity: 0.6;
  border-radius: 7px;
}
</style>
